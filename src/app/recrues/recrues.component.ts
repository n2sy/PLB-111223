import { Component } from '@angular/core';
import { GererRecruesService } from '../services/gerer-recrues.service';
import { Candidat } from '../models/Candidat';

@Component({
  selector: 'app-recrues',
  templateUrl: './recrues.component.html',
  styleUrl: './recrues.component.css'
})
export class RecruesComponent {
  tab : Candidat[] = [];
  constructor(private recSer : GererRecruesService) {

  }

  ngOnInit() {
    this.tab = this.recSer.getAllRecrues();
  }

}
