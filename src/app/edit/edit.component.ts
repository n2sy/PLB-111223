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
    this.candSer.getCandidatByIdAPI(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
      {
        next : (response : Candidat) => {
          this.uCand = response;
        },
        error : (err) => {
          console.log(err);
          
        }
      }
    )
  }

  onValider() {
    this.candSer.updateCandidatAPI(this.uCand).subscribe(
      {
        next : (response) => {
          alert(response['message']);
          this.router.navigateByUrl('/cv')
        },
        error : (err) => {
          console.log(err);
          
        }
      }
    )
  }



}
