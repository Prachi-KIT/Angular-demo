import { Injectable } from '@angular/core';
import { receipe } from './receipe.model';

@Injectable({
  providedIn: 'root'
})
export class ManageReceipeService {
  private ReceipeList:receipe[]=[
    //new receipe('Aloo Parada',45,'https://thumbs.dreamstime.com/z/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg','Delicious Food you can easily find in indian home'),
    new receipe('Maggie',20,'/assets/img/receipe/1.jpg','Delicious curry'),
    new receipe('Aloo Paratha',50,'/assets/img/receipe/2.jpg','Delicious Aloo Paratha'),
    new receipe('Samosa',30,'/assets/img/receipe/3.jpg','Delicious Samosa')
  ];
  constructor() { }

  GetReceipe()
  {
    return this.ReceipeList.slice();
  }
}
