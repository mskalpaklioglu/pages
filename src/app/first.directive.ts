import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor(private elememt:ElementRef) {

   }

   @Input() set backgroundColor(color:string)
   {
    this.elememt.nativeElement.style.backgroundColor = color;
   }

}
