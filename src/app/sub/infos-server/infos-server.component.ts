import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infos-server',
  templateUrl: './infos-server.component.html',
  styleUrl: './infos-server.component.css'
})
export class InfosServerComponent {
  myServer = {};
  disabledButton = false;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    // this.myServer = {
    //           id : this.activatedRoute.snapshot.paramMap.get('id'),
    //           title : this.activatedRoute.snapshot.paramMap.get('title'),
    //           statut : this.activatedRoute.snapshot.paramMap.get('statut')
    //         }
    
    this.activatedRoute.paramMap.subscribe(
      {
        next : (p) => {
          this.myServer = {
            id : p.get('id'),
            title : p.get('title'),
            statut : p.get('statut')
          }
          
        }
      }
    )
    this.activatedRoute.queryParamMap.subscribe(
      {
        next : (q) => {
         this.disabledButton = q.get('allowEdit') == '1' ? false : true
        }
      }
    )



  }
}
