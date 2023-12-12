import { Component } from '@angular/core';
import { Candidat } from '../models/Candidat';
import { FirstService } from '../services/first.service';
import { GereCandidatsService } from '../services/gere-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  // providers : [FirstService]
})
export class CvComponent {
  tabCandidats : Candidat[] = [];
  selectedCandidat : Candidat;

  constructor(private firstSer : FirstService, private candSer : GereCandidatsService) {}

  ngOnInit() {
    // this.firstSer.secondSer.showInfos();
    this.firstSer.showInfos();
    this.tabCandidats = this.candSer.getAllCandidats();
  }

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }

  addCandidat() {
    this.candSer.addNewCandidat();
  }

  showCandidats() {
    console.log(this.candSer.getAllCandidats());
    
  }
}
