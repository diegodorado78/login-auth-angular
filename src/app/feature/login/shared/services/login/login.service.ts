import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { Credentials, Login } from 'src/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl= `${environment.API}/auth`;

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(credentials: Credentials) {
    return this.http.post<Login>(`${this.apiUrl}/login`,credentials)

  }
  constructor(   
     private http:HttpClient
    ){

  }
}
