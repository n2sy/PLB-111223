import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css'
})
export class AddAccountComponent {
  allStatus = ['', 'inactive', 'active', 'unknown'];
  newName = '';
  newStatut = '';
  @Output() eventToHome = new EventEmitter();

  sendNewAccountToHome() {
    this.eventToHome.emit(
      {
        name : this.newName,
        statut : this.newStatut
      }
    )
  }
}
