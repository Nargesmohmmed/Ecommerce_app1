import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService , private _Router:Router) {}

  msgError:string = '';
  isLoading:boolean = false;

  registerFrom: FormGroup = new FormGroup ({

    name : new FormControl ('' , [Validators.required , Validators.minLength(3) , Validators.maxLength(20)]) ,
    email : new FormControl ('' , [Validators.required , Validators.email]) ,
    password : new FormControl ('' , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]) ,
    rePassword : new FormControl ('' ),
    phone : new FormControl ('' , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])


  } , {validators: [this.confirmPassword]} as FormControlOptions);


  confirmPassword(group:FormGroup):void {

    const password = group.get('password');
    const rePassword = group.get('rePassword');

    if (rePassword?.value == '') {
      rePassword?.setErrors({require : true})
    }
    else if (password?.value != rePassword?.value) {

      rePassword?.setErrors({mismatch : true})

    }

  }



  handleForm() : void {

    if(this.registerFrom.valid) {

      this.isLoading = true;

      console.log(this.registerFrom.value);
      this._AuthService.setRegister(this.registerFrom.value).subscribe({

        next: (respones) => {

          if(respones.message == 'success') {

            this.isLoading = false;

            this._Router.navigate(['/login']);

          }

        },
        error: (err) => {
          this.isLoading = false;
          this.msgError = err.error.message;
          console.log(err.error.message)
        }

      })

    }

  }





}
