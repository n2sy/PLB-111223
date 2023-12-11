import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrl: './ms-word.component.css'
})
export class MsWordComponent {
  bg; cl; size; font;

  changeSize(newsize) {
    console.log(newsize);
    
    this.size = newsize + 'px';
  }
}
