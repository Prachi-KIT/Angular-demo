import { Injectable } from '@angular/core';
import { receipe } from './receipe.model';

@Injectable({
  providedIn: 'root'
})
export class ManageReceipeService {
  private ReceipeList:receipe[]=[
    new receipe('Aloo Parada',10001,'https://images.app.goo.gl/zv1BXMDnRqaftzh17','Delicious Food you can easily find in indian home'),
    new receipe('Maggi',10002,'https://foodiewish.com/recipes/schezwan-maggi-recipe/','Delicious curry'),
    new receipe('Chaumin',10003,'https://www.dreamstime.com/chinese-noodles-chowmein-plate-spoon-fork-chinese-noodles-chowmein-plate-spoon-fork-hot-fresh-chow-image122107336','Delicious Chauwmin')
  ];
  constructor() { }

  GetReceipe()
  {
    return this.ReceipeList.slice();
  }
}
