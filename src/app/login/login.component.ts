import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  defaultLang = "php";
  showSignUp = true;
  errorLogin = false;

  myCommentaire = 'Rien à signaler...';
  constructor(private authSer : AuthService, private router : Router) { }
  submitHandler(f) {
    console.log(f);
    if(this.showSignUp) {
      this.authSer.Inscription(f.value).subscribe(
        {
          next : (response) => {
            alert(response['message']);
            this.switchSignUpButton();
            f.reset();
          },
          error : (err) => {
            console.log(err);
            
          }
        }
      )
    }
    else {
      this.authSer.seConnecter(f.value).subscribe(
        {
          next : (response) => {
            alert(response['message']);
            console.log(response);
            localStorage.setItem('myToken', response['token']);
            this.router.navigateByUrl('/cv');
            
          },
          error : (err) => {
            console.log(err);
            this.errorLogin = true;
            f.reset();
          }
        }
      )
    }
  }

  resetHandler(f : NgForm) {
    f.reset();
  }

  switchSignUpButton() {
    this.showSignUp = !this.showSignUp;
  }

  genratePwd(f : NgForm) {
    f.setValue({
      "login": "",
      "password": "infoGones123",
      "infos": {
        "langage": "",
        "commentaire": ""
      },
      "exemple": ""
    });
  }
  genratePwdII(f : NgForm) {
    f.form.patchValue({
      "password": "infoGones123",
    });
  }

}
