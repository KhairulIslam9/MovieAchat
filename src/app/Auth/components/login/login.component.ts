import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { LoginForm } from '../../models/loginForm.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup : FormGroup

  constructor(private builder : FormBuilder,
    private authService : AuthService) { }

  ngOnInit(): void {
    this.formGroup = this.builder.group({
      email :['',[Validators.required, Validators.email]],
      passwd : ['',[Validators.required]]
    })
  }

  onSubmit() {
    const login = new LoginForm();
    const formValues = this.formGroup.value
    login.email = formValues['email']
    login.passwd = formValues['passwd']

    this.authService.login(login);
  }

}
