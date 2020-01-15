import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class StrDirective {

  constructor( private vref: ViewContainerRef, private tref: TemplateRef<any>) { }
  @Input() set myIf(val: boolean) {
    if (val) {
      this.vref.createEmbeddedView(this.tref);
    } else {
      this.vref.clear();
    }
  }
}
