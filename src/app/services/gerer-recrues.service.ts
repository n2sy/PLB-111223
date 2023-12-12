import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Injectable()
export class GererRecruesService {
  private tabRecrues : Candidat[] = [];
  constructor() { }

  getAllRecrues() {
    return this.tabRecrues;
  }

  addRecrue(newRecrue) {
    if(this.tabRecrues.indexOf(newRecrue) == -1) 
      this.tabRecrues.push(newRecrue);
    else
      alert('Ce candidat a déjà été recruté !')
  }
}
