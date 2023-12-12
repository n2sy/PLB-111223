import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'p[appCustomDir]'
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bg = 'white';
  @HostBinding('style.color') cl = "black";
  
  //constructor(private el : ElementRef) { }

  @HostListener('mouseenter') mouseenter() {
    this.bg = "grey";
    this.cl = "white";
  }
  @HostListener('mouseleave') mouseleave() {
    this.bg = "pink";
    this.cl = "black";
  }



}
