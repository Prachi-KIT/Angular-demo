import { Component, OnInit } from '@angular/core';
import { receipe } from './receipe.model';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  DataComefromReceiptlist:receipe;
}
