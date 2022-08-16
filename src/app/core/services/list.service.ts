import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user.model';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private http:HttpClient ) { }

  page:number=1;
  getAllUsers(){
    return this.http.get<any>(`${environment.API}/users`) ;


    
   }
}
