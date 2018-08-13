import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../dataClass/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistService {

  constructor( private http: HttpClient) {}

  path = environment.path;

  TOKEN_KEY = 'TOKEN';



  register(user: User) {

    let headers = new HttpHeaders;
    headers = headers.append('Content-Type', 'application/json');
    this.http.post(this.path + 'author/register',  user, {headers: headers}).subscribe();

  }

  login(user: User) {

    let headers = new HttpHeaders;
    headers = headers.append('Content-Type', 'application/json');
    this.http.post(this.path + 'author/login',  user, {headers: headers}).subscribe(data => {
      this.saveToken(data['token']);
    });

  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut(token) {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  get isLogin() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
