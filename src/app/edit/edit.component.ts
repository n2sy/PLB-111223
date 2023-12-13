import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../models/Candidat';
import { GereCandidatsService } from '../services/gere-candidats.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  uCand : Candidat;

  constructor(private activatedRoute: ActivatedRoute, private candSer : GereCandidatsService,
    private router : Router ) { }

  ngOnInit() {
    this.uCand = this.candSer.getCandidatById(this.activatedRoute.snapshot.paramMap.get('id'))

  }

  onValider() {
    this.candSer.updateCandidat(this.uCand);
    this.router.navigateByUrl('/cv')
  }



}
