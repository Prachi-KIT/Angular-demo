import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  
  @HostBinding('class.open') IsOpen=false;
  constructor() { }
  @HostListener('click') toggleOpen()
  {
    this.IsOpen=!this.IsOpen;
  }
}
