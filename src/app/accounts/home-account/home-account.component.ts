import { Component } from '@angular/core';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrl: './home-account.component.css'
})
export class HomeAccountComponent {
tabAccounts = [
  {
    name : 'Emmanuel Account',
    statut : 'unknown'
  },
  {
    name : 'Dimitri Account',
    statut : 'active'
  }
]
}
