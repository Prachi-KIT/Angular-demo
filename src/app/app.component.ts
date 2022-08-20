import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shopping-and-Receipe';
  constructor(){}
  FeaturesSelected:string='';
  loadedfeatures:string='receipe';
  ngOnInit()
  {

  }
  OnNavigate(xx:string)
  {
     this.loadedfeatures=xx;
  }
  
}
