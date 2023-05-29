import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {


  ngOnInit() {
  }


  name!: string;
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.name, this.email, this.password).subscribe(
      (response: any) => { // Type assertion to 'any'
        if (response.status === true) {
          // Save the token in local storage or any other appropriate place
          localStorage.setItem('token', response.token);
          alert(response.token);
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
