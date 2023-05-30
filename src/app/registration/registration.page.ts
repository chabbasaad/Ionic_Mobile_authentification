import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  UserRegisterForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // Initialize the user registration form with form controls and validators

    this.UserRegisterForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z]+$')]],
      Email: ['', [Validators.required, Validators.email, Validators.minLength(4)]],
      Password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z-@0-9]+')]]


    });
  }

  register() {


    // Call the registration service to register the user
    this.authService.register(
      this.UserRegisterForm.value.Name,
      this.UserRegisterForm.value.Email,
      this.UserRegisterForm.value.Password
    ).subscribe(
      (response: any) => {
        if (response.status === true) {
          // If registration is successful, save the token in local storage

          localStorage.setItem('token', response.token);

          // Navigate to the dashboard page
          this.router.navigate(['/dashboard']);
        } else {
          // Handle registration error, display a message, etc.
        }
      },
      (error) => {

        // Handle registration error, display a message, etc.
      }
    );
  }

}
