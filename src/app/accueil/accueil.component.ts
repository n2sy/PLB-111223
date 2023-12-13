import { HttpClient } from '@angular/common/http';
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

  constructor(private router : Router, private http : HttpClient) { } //Apollo Client

  ngOnInit() {
    // this.http.get('https://jsonplaceholder.typicode.com/userrrs').subscribe(
    //   {
    //     next : (response) => {
    //       console.log(response);
    //     },
    //     error : (err) => {
    //       console.log(err);    
    //     },
    //     complete : () => {
    //       console.log("Flux terminé");
          
    //     }
    //   }
    // )
  }

  goToServers() {
    // Traitement
    this.router.navigateByUrl('servers');
  }

  goToCv() {
    this.router.navigate(['cv'])
  }
}
