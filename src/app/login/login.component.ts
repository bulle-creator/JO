import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet,NgFor,FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  loginObj: Login;


  constructor(private http: HttpClient, private router:Router ) {
    this.loginObj = new Login();
  }

  onLogin() {
    debugger;
    this.http.post('http://localhost:3000/api/users', this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Connexion réussi");
        this.router.navigateByUrl('/home-component');
      } else {
        alert ("Connexion Failed!");
      }
    });
  }
}
export class Login{
  login:string;
  password:string;
  constructor() {
    this.login ='';
    this.password ='';
  }
}

