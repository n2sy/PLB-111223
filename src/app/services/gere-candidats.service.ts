import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
  link = 'http://localhost:3000/cv/persons';
  constructor(private http : HttpClient) { }

  getAllCandidats() {
    return this.tabCands;
  }

  getAllCandidatsAPI() {
    return this.http.get(this.link)
  }

  getCandidatById(id) {
    return this.tabCands.find((c) => c._id == id)
  }

  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`)
  }

  deleteCandidat(id) {
    let i = this.tabCands.findIndex((c) => c._id == id);
    this.tabCands.splice(i, 1);
  }

  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/free/${id}`);
  }

  updateCandidat(uCand) {
    let i = this.tabCands.indexOf(uCand);
    this.tabCands[i] = uCand;
  }

  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/free/${uCand._id}`, uCand)
  }

  addNewCandidat(newCand) {
    newCand.id = this.tabCands[this.tabCands.length - 1]._id + 1;
    this.tabCands.push(newCand);
    }

  addNewCandidatAPI(newCand) {
  
    return this.http.post(`${this.link}`, newCand);
      
 
    }
}
