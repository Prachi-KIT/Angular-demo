import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlighter]'
})
export class BasicHighlighterDirective {

  constructor(private Element:ElementRef) { }

  ngOnInit()
  {
    this.Element.nativeElement.style.backgroundColor='pink';
    this.Element.nativeElement.style.color='Blue';
    this.Element.nativeElement.style.padding='15px';
  }
}
