import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css'
})
export class InfosComponent {
  id;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    //this.id = this.activatedRoute.snapshot.params['id']
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.paramMap.subscribe(
      {
        next : (p: ParamMap) => {
          this.id = p.get('id');
        }
      }
    )
  }
}
