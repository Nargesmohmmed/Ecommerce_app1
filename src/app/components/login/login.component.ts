import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService ,private _Router:Router , private _FormBuilder:FormBuilder) {}


  isLoading:boolean = false;
  msgError:string = '';

  // loginForm: FormGroup = new FormGroup ({

  //   email : new FormControl (null , [Validators.required , Validators.email]) ,
  //   password : new FormControl (null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]) ,

  // });

  // _FormBuilder

  loginForm: FormGroup = this._FormBuilder.group({
    email : [null , [Validators.required , Validators.email]],
    password : [null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]]
  })



  handleForm():void {

    if (this.loginForm.valid) {

      this.isLoading = true;

      this._AuthService.setLogin(this.loginForm.value).subscribe({

        next:(respones) => {

          if (respones.message == 'success') {

            this.isLoading = false;
            localStorage.setItem("eToken" , respones.token);
            this._AuthService.saveUserData();
            this._Router.navigate(['/home']);

          }

        },

        error:(err) => {

          this.isLoading = false;
          this.msgError = err.error.message;

        }

      })

    } else {
      // يجيب كل الاخطاء لو مش valid
      this.loginForm.markAllAsTouched();
    }

  }

}
