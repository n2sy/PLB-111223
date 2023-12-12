import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable()
export class FirstService {

  // constructor(public secondSer : SecondService) { }
  constructor(private secondSer : SecondService) { }

  showInfos() {
    console.log("Je suis le FirstService");
    this.secondSer.showInfos();
    
  }
}
