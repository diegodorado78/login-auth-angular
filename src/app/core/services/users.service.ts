import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {User, CreateUserDTO } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private apiUrl= `${environment.API}/users`
  constructor(
    private http:HttpClient
  ) { }
  create(dto:CreateUserDTO){
    return this.http.post<User>(this.apiUrl,dto)

  }
}
