import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthUser } from './models/authUser.model';
import { LoginForm } from './models/loginForm.model';
import { RegisterForm } from './models/registerForm.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    currentUser : AuthUser;

    private URL : string ="https://localhost:44353/api/"

    constructor(private httpClient : HttpClient) {
        
    }

    register(newUser : RegisterForm) {
        this.httpClient.post(this.URL+'auth/register', newUser).subscribe({
            next : () => console.log("Register OK"),
            error : (error) => console.log(error)
          })
    }

    login(loginInfo : LoginForm) {
        this.httpClient.post<AuthUser>(this.URL+'auth/login', loginInfo).subscribe({
          next : (userFromAPI : AuthUser) => {
            this.currentUser = userFromAPI
            sessionStorage.setItem("token", this.currentUser.token)
            console.log(this.currentUser)
          },
          error : (error)=> console.log(error)
        })
      }

}