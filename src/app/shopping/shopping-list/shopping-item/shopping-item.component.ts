import { Component, Input, OnInit } from '@angular/core';
import { Shopping } from '../../shopping.model';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  @Input() ShopChild:Shopping;
  constructor() { }

  ngOnInit(): void {
  }

}
