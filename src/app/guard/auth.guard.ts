import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    // Check if user is authenticated (e.g., check if token exists in local storage)
    if (localStorage.getItem('token')) {
      return true; // Allow access to the route
    } else {
      this.router.navigate(['/login']); // Redirect to the login page
      return false; // Block access to the route
    }
  }
}