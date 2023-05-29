import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ionViewDidEnter() {
    // Fetch user-specific data or perform authenticated actions
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goToWorkouts() {
    this.router.navigate(['/workouts']);
  }

  goToMeals() {
    this.router.navigate(['/meals']);
  }

  goToProgress() {
    this.router.navigate(['/progress']);
  }

  goToTrainWithFriends() {
    this.router.navigate(['/train-with-friends']);
  }


  ngOnInit() {
  }

}
