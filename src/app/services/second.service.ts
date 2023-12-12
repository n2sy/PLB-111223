import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  constructor() { }

  showInfos() {
    console.log("Je m'occupe de l'addition");
  }
}
