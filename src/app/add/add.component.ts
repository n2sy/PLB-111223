import { Component } from '@angular/core';
import { GereCandidatsService } from '../services/gere-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  constructor(private candSer : GereCandidatsService, private router : Router) { }

  onSubmit(fValue) {
    this.candSer.addNewCandidat(fValue);
    this.router.navigateByUrl('/cv')
  }
}
