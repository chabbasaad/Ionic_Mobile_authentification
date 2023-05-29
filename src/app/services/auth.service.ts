import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://localhost:8000/api/auth';

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string) {
    const url = `${this.API_URL}/register`;
    const body = { name, email, password };
    return this.http.post(url, body);
  }

  login(email: string, password: string) {
    const url = `${this.API_URL}/login`;
    const body = { email, password };
    return this.http.post(url, body);
  }

  logout() {
    // Implement the logout logic, such as clearing the authentication token
  }


}
