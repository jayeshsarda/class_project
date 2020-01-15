import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
  @HostBinding('style.color') myColor: string;
  @HostBinding('style.border') myBorder: string;
  constructor( private eref: ElementRef) {
    // this.eref.nativeElement.style.color = 'green';
    // this.eref.nativeElement.style.border = '2px solid red';
  }

  @HostListener('mouseover') onmouseover() {
    this.myColor = 'red';
    this.myBorder = '2px solid green';
  }

  @HostListener('mouseleave') onmouseleave() {
    this.myColor = 'purple';
    this.myBorder = '2px solid black';
  }
}
