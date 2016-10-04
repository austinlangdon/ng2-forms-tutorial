import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Request, RequestMethod } from '@angular/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  authenticated: boolean;
  profile: Object;
  authZeroDomain: string = 'https://austinlangdon.auth0.com/oauth/ro';

  constructor(public http: Http, fb: FormBuilder) {
    
    if(localStorage.getItem('jwt')) {
      this.authenticated = true;

      this.profile = JSON.parse(localStorage.getItem('profile'));
    }

    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    })
   }

  ngOnInit() {
  }

  submitForm(value: any): void {
    let form = {
      'client_id' : 'Eo6rWdmsIyXXG3FRx2Ec2ABsP7fCXuFp',
      'username' : value.email,
      'password' : value.password,
      'connection' : 'Username-Password-Authentication',
      'grant_type' : 'password',
      'scope' : 'openid name email'
    }

    this.http.post(this.authZeroDomain, form).subscribe(
      (res: any) => {
        let data = res.json();
        
        this.profile = data;
        localStorage.setItem('profile', JSON.stringify(data));
        this.authenticated = true;
        // We’ll use the reset() method to reset the form. So if a user logs out they will need to enter their credentials again. If we did not do this, the previous values would still be displayed.
        this.loginForm.reset();
      } 
    )
  }

  getUserInfo(data: any) {
    let form = {
      'id_token': data.id_token
    }
    this.http.post('https://reviewgen.auth0.com/tokeninfo', form).subscribe(
      (res: any)=>{
        let data = res.json();
        this.profile = data;
        localStorage.setItem('profile', JSON.stringify(data));
        this.authenticated = true;
        this.loginForm.reset();
      }
    )
  }

  logout(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('profile');
    this.authenticated = false;
  }

}
