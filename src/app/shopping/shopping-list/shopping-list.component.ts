import { Component, OnInit } from '@angular/core';
import { Shopping } from '../shopping.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
Shopes:Shopping[]=[
new Shopping("Item 1",1),
new Shopping("Item 2",2),
new Shopping("Item 3",3)
]
  constructor() { }

  ngOnInit(): void {
  }

}
