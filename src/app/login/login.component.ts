import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
//import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet,NgFor,FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

 // constructor(private authService: AuthService, private router: Router) { }

 // register() {
  //  this.authService.register({ username: this.username, password: this.password })
    //  .subscribe(
  //     () => alert('User registered successfully'),
     //   (error) => alert('Registration failed')
    //  );
 // }

//  login() {
//    this.authService.login({ username: this.username, password: this.password })
   //   .subscribe(
     //   (response) => {
    //      localStorage.setItem('token', response.token);
     //     this.router.navigate(['/']);
     //   },
     //   (error) => alert('Login failed')
    //  );
 // }
}

