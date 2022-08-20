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

  ngOnInit(): void {}

  changeStatus() {
    this.status = !this.status;
  }

  deleteRecored() {
    this.http
      .delete('http://127.0.0.1:3000/factures/' + this.factureObj._id)
      .subscribe(() => console.log('facture deleted'));
    this.router.navigate(['/addfacture']).then(() => window.location.reload());
  }

  updateRecord() {}
}
