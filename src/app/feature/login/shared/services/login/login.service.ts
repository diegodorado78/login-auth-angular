import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { Credentials, Login } from 'src/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl= environment.API;
  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(credendials:Credentials) {//recibe directamente un arg tipo Credentials
    const url =`${this.apiUrl}/login`
    return this.http.post<Login>(url,credendials)//como me debo suscribir debo retornar el observable

  }
  constructor(   
     private http:HttpClient
    ){

  }
}
