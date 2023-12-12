import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Injectable({
  providedIn: 'root'
})
export class GereCandidatsService {
  private tabCands : Candidat[] = [
    new Candidat(1, "Homer", "Simpson", 33, "Ingénieur", "homer.png"),
    new Candidat(2, "Bart", "Simpson", 25, "Stagiaire", "bart.jpeg"),
    new Candidat(3, "Lisa", "Simpson", 20, "Designer", "lisa.png"),
    new Candidat(4, "Nidhal", "Jelassi", 40, "Formateur"),
  ];
  constructor() { }

  getAllCandidats() {
    return this.tabCands;
  }

  addNewCandidat() {
    this.tabCands.push( new Candidat(5, "NEW", "CANDIDAT", 40, "Formateur"))
  }
}
