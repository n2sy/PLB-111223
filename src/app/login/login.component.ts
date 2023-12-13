import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  defaultLang = "php";

  myCommentaire = 'Rien à signaler...'
  submitHandler(f) {
    console.log(f);
  }

  resetHandler(f : NgForm) {
    f.reset();
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
