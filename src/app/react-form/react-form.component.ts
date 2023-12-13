import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrl: './react-form.component.css'
})
export class ReactFormComponent {

  signUpForm : FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup(
      {
        username : new FormControl('nidhal', Validators.required),
        addrMail : new FormControl(null, [Validators.email, Validators.required]),
        skills : new FormArray([])
      }
    )
  }

  get formsSkills() {
    return <FormArray>this.signUpForm.get('skills');
  }

  addSkill() {
    let Ctrl = new FormControl(null, Validators.required);
    this.formsSkills.push(Ctrl);
  }


  submitHandler() {
    console.log(this.signUpForm.value);

  }

}
