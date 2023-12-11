import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  title : string = "Angular chez PLB";
  year : number = 2023;
  color : string = "pink";
  hd = false;

  traitement() {
    alert("J'ai été cliqué !")
  }

  traitementDuChild(msg : any) {
    console.log(msg);
    this.title = msg;
    
  }

}


