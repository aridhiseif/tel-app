import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archive-record',
  templateUrl: './archive-record.component.html',
  styleUrls: ['./archive-record.component.css'],
})
export class ArchiveRecordComponent implements OnInit {
  @Input() factureObj;
  status: Boolean = true;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, public router: Router) {}

  ngOnInit(): void {
    const datef = Date.parse(this.factureObj.datef);
    console.log('datef =', datef);
    console.log('date now =', Date.now());
  }

  changeStatus() {
    this.status = !this.status;
  }

  getClass() {
    const datef = Date.parse(this.factureObj.datef);
    return {
      factureMain: datef > Date.now(),
      factureMainRed: datef < Date.now(),
    };
  }

  deleteRecored() {
    this.http
      .delete('http://127.0.0.1:3000/factures/' + this.factureObj._id)
      .subscribe(() => {
        alert("'facture deleted'");
        this.router.navigate(['/archive']).then(() => window.location.reload());
      });
  }

  updateRecord(fullName: any, tel: any, montant: any) {
    let body = {
      fullName: fullName,
      tel: tel,
      montant: montant,
    };

    console.log(body);
    this.http
      .put(
        'http://127.0.0.1:3000/factures/' + this.factureObj._id,
        body,
        this.httpOptions
      )
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/archive']).then(() => window.location.reload());
      });
  }
}
