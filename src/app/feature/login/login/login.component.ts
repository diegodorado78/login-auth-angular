import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../shared/services/login/login.service';
import { Credentials } from 'src/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
 loginForm:FormGroup
 email:string;
 password:string;
  constructor(
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private loginService:LoginService
  ) {
    this.buildForm();
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['eve.holt@reqres.in', [Validators.required]],
      password: ['cityslicka', [Validators.required, Validators.minLength(8)]],
    });
  }
  login() {
    if (this.loginForm.valid){//si el loginForm es valido, guarda los datos ingresados y llama al servicio
     const{email,password}=this.loginForm.value //desestructuro los valores del form

      const credentials:Credentials={ //creo un objeto tipado para poner los valores del form
        email:email,
        password:password
      }      
      this.loginService.login(credentials)
      .subscribe(res =>{
        localStorage.setItem('token',res.token)
        console.log(localStorage.token);//como respuesta obtengo el token
      })
      this.redirectUsers();
    }
  }


  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('');
  }

}
