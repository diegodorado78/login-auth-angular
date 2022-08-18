import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './shared/services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  createForm:FormGroup
  email:string;
  password:string;
  constructor(
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private usersService:UsersService

  ) {
    this.buildForm();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private buildForm() {
    this.createForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      userJob: ['', [Validators.required]],
    });
  }
  createUser(event: Event){
    event.preventDefault();
    if (this.createForm.valid){//si el loginForm es valido, guarda los datos ingresados y llama al servicio
      const value = {
        userName:this.createForm.value.email,
        userJob:this.createForm.value.password
      };
      this.usersService.createUser()
      // .then(()=>{
      return this.redirectToListUsers();
  }
  }


  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
