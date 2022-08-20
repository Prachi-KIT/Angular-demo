import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() FeaturesSelected=new EventEmitter<string>();
  constructor() { }


  ngOnInit(): void {
  }

  OnSelect(features:string)
  {
      this.FeaturesSelected.emit(features);
  }
}
