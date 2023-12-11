import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PLB-111223';

  traitementDuApp(msg : any) {
    alert(msg);
  }
}
