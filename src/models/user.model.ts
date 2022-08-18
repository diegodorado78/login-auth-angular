export interface Credentials {
    email: string;
    password: string;
  }
  export interface Login {
    token: string;
  }
export interface User{
    id:string;
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;
    password:string

}

export interface CreateUserDTO extends Omit<User,'id'>{}