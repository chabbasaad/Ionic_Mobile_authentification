import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  UserLoginForm !: FormGroup;
  public alertButtons = ['OK'];
  isAlertOpen = false;
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    // Initialize the login form with validators
    this.UserLoginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email, Validators.minLength(4)]],
      Password: ['', [Validators.required, Validators.minLength(8)]]

    });
  }

  // Method triggered when the login button is clicked
  login() {
    this.isAlertOpen = false;
    // Call the login method from the AuthService
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
        this.isAlertOpen = true;
        // Handle login error, display a message, etc.
      }
    );
  }


}


