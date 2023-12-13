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

  getCandidatById(id) {
    return this.tabCands.find((c) => c.id == id)
  }

  deleteCandidat(id) {
    let i = this.tabCands.findIndex((c) => c.id == id);
    this.tabCands.splice(i, 1);
  }

  updateCandidat(uCand) {
    let i = this.tabCands.indexOf(uCand);
    this.tabCands[i] = uCand;
  }

  addNewCandidat(newCand) {
    newCand.id = this.tabCands[this.tabCands.length - 1].id + 1;
    this.tabCands.push(newCand);
    }
}
