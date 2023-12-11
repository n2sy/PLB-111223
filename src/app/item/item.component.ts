import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() oneCandidat : Candidat;
  @Output() eventToListe = new EventEmitter();

  sendCandidatToListe() {
    this.eventToListe.emit(this.oneCandidat)
  }
}
