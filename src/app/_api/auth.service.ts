import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = "http://epi-server.herokuapp.com/";

  register(body: any) {
    return this.http.post(this.url + "register", body);
  }

  login(body: any) {
    return this.http.post(this.url + "login", body);
  }
}
