import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { receipe } from '../../receipe.model';
import { receipedemo } from '../receipedemo.model';


@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  
  @Input() ReceipeItem:receipedemo;
  @Output() PassDataToReceipeList=new EventEmitter<void>();
  constructor()
  {

  }
  
  ngOnInit(): void {}
  OnSelectedReceipe()
  {
    this.PassDataToReceipeList.emit()
  }

}
