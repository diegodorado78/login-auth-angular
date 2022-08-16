import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials, Login } from 'src/models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private apiUrl= `${environment.API}/auth`;
  constructor(
    private http:HttpClient

  ) { }

  login(){
  }
  profile(){
    return this.http.get(`${this.apiUrl}/profile`)
  }
}
