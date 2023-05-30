import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://localhost:8000/api/auth'; // Base URL for API endpoints

  constructor(private http: HttpClient) { }

  // Function to register a new user
  register(name: string, email: string, password: string) {
    const url = `${this.API_URL}/register`; // Endpoint URL for registration
    const body = { name, email, password }; // Request body containing user data
    return this.http.post(url, body); // Send POST request to the API
  }

  // Function to log in a user
  login(email: string, password: string) {
    const url = `${this.API_URL}/login`; // Endpoint URL for login
    const body = { email, password }; // Request body containing login credentials
    return this.http.post(url, body); // Send POST request to the API
  }

  // Function to log out a user
  logout() {
    // Remove the token from local storage
    localStorage.removeItem('token');

  }
}