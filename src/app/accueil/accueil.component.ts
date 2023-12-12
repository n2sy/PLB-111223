import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  id = 5;
  prenom = "nidhal";
  age = 40;

  constructor(private router : Router) { }

  goToServers() {
    // Traitement
    this.router.navigateByUrl('servers');
  }

  goToCv() {
    this.router.navigate(['cv'])
  }
}
