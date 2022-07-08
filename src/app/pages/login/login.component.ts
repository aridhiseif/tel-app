import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/utils/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public isAuthLoading = false;
  public loginForm: FormGroup;
  admin: any;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    localStorage.clear();
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  async login() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      alert('invalid credantials');
    } else {
      await fetch('http://127.0.0.1:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.loginForm.value),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.length === 0) {
            alert('Email ou mot de passe est incorrect');
          } else {
            localStorage.setItem('idAdmin', data[0]._id);
            localStorage.setItem('firstname', data[0].firstname);
            localStorage.setItem('lastname', data[0].lastname);
            localStorage.setItem('email', data[0].email);
            location.replace('/');
          }
        });
    }
  }
}
