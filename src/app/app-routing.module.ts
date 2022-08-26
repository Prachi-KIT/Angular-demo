import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingItemComponent } from './shopping/shopping-list/shopping-item/shopping-item.component';

const Route:Routes=[
  {path:'',redirectTo:'',pathMatch:'prefix'},
  {path:'Receipe',component:ShoppingItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(Route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent={ShoppingItemComponent}
