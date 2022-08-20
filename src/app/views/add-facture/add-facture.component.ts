import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css'],
})
export class AddFactureComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, public router: Router) {}

  ngOnInit(): void {}

  submitForm(value, value2, value3, value4, value5) {
    const body = {
      fullName: value,
      tel: value2,
      dates: value3,
      datef: value4,
      montant: value5,
    };
    console.log('btn ajouter pressed');
    console.log(body);

    this.http
      .post('http://127.0.0.1:3000/factures', body, this.httpOptions)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );

    alert('facture ajouter!');
    this.router.navigate(['/addfacture']).then(() => window.location.reload());
    return false;
  }
}
