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
  Img:string;
  @Output() PassDataToReceipeList=new EventEmitter<void>();
  constructor()
  {
    
  }
  
  ngOnInit(): void {
    this.Img=this.ReceipeItem.receipeimg; 
  }
  OnSelectedReceipe()
  {
    this.PassDataToReceipeList.emit()
  }

}
