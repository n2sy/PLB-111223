import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GereCandidatsService } from '../services/gere-candidats.service';
import { Candidat } from '../models/Candidat';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css'
})
export class InfosComponent {
  id;
  cand : Candidat;
  constructor(private activatedRoute : ActivatedRoute, private candSer : GereCandidatsService,
    private router : Router) { }

  ngOnInit() {
    // Version avec les observables
    // this.activatedRoute.paramMap.subscribe(
    //   {
    //     next : (p: ParamMap) => {
    //       this.id = p.get('id');
    //     }
    //   }
    // )

    //this.id = this.activatedRoute.snapshot.params['id']

    this.candSer.getCandidatByIdAPI(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
      {
        next : (response : Candidat) => {
          this.cand = response;
        },
        error : (err) => {
          console.log(err);
          
        }
      }
    )
  }

  onDelete() {
    if(confirm('Etes vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidatAPI(this.cand['_id']).subscribe(
        {
          next : (response) => {
            alert(response['message']);
            this.router.navigateByUrl('/cv');
          },
          error : (err) => {
            console.log(err);
            
          }
        }
      )
    }
  }
}
