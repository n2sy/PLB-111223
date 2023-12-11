import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input({required : true}) myColor : string = "grey";
  @Output() sendMsgToParent = new EventEmitter();

 

  sendMessage() {
    this.sendMsgToParent.emit("Message envoyé par ton enfant");
  }
}


