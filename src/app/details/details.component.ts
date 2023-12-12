import { Component, Input } from '@angular/core';
import { Candidat } from '../models/Candidat';
import { GererRecruesService } from '../services/gerer-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
 @Input() selCandidat : Candidat;

 constructor(private RecrueSer : GererRecruesService) {}

 addNewRecrue() {
  this.RecrueSer.addRecrue(this.selCandidat);
 }
}
