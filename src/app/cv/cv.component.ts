import { Component } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  tabCandidats : Candidat[] = [
    new Candidat(1, "Homer", "Simpson", 33, "Ingénieur", "homer.png"),
    new Candidat(2, "Bart", "Simpson", 25, "Stagiaire", "bart.jpeg"),
    new Candidat(3, "Lisa", "Simpson", 20, "Designer", "lisa.png"),
  ];
  selectedCandidat : Candidat;

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
