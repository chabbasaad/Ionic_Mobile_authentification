import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/interfaces/login-response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {




  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => { // Type assertion to 'any'
        if (response.status === true) {
          // Save the token in local storage or any other appropriate place
          localStorage.setItem('token', response.token);
          // Redirect to the dashboard page
          this.router.navigate(['/dashboard']);
        } else {
          // Handle login error, display a message, etc.
        }
      },
      (error) => {
        // Handle login error, display a message, etc.
      }
    );
  }
}


