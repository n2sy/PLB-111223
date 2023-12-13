import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/Candidat';
import { GereCandidatsService } from '../services/gere-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
})
export class ListeComponent {
  allCandidats : Candidat[] = [];
  @Output() eventToCv = new EventEmitter();

  constructor(private candSer : GereCandidatsService) {}

  ngOnInit() {
    this.candSer.getAllCandidatsAPI().subscribe(
      {
        next : (response : Candidat[]) => {
          this.allCandidats = response;
        },
        error : (err) => {
          alert('Données fictives')
          this.allCandidats = this.candSer.getAllCandidats();
        }
      }
    )
  }

 sendCandToCv(cand) {
  this.eventToCv.emit(cand)
 }

 showCandidats() {
  console.log(this.candSer.getAllCandidats());
  
}
}
