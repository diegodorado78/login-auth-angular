import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../shared/services/login/login.service';

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
    throw new Error('Method not implemented.');
  }
  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  login(event: Event) {
    event.preventDefault();
    if (this.loginForm.valid){//si el loginForm es valido, guarda los datos ingresados y llama al servicio
      const value = {
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      };
      this.loginService.login(value)
      // .then(()=>{
      return this.redirectUsers();
      // })
      // .catch(()=>{
      //   alert('error en las credenciales')
      // })
    }
    console.log(this.loginForm.value);
  }


  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

}
