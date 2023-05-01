import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseData } from '../model/auth-response-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(
    private http: HttpClient,
  ) { }

  singUp(email: string, password: string) {
    return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCpXsBXNgViqQB-UOwpw_NWuzcXLR4B7ng',
    {email, password, returnSecureToken: true},
    {
      headers: {
        'content-type': 'application/json'
      }
    }
    )
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCpXsBXNgViqQB-UOwpw_NWuzcXLR4B7ng',
    {email, password, returnSecureToken: true},
    {
      headers: {
        'content-type': 'application/json'
      }
    }
    )
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }

  addUser(data: any) {
    this.http.post('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/users.json', data, {
      headers: {
        "content-type": "application/json"
      }
    })
  }
}
