import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ReceipeListComponent } from './receipe/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './receipe/receipe-list/receipe-item/receipe-item.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping/shopping-list/shopping-item/shopping-item.component';
import { HeaderComponent } from './header/header.component';
import { BasicHighlighterDirective } from './basic-highlighter.directive';
import { DropdownDirective } from './receipe/Shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    ReceipeComponent,
    ShoppingComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
    HeaderComponent,
    BasicHighlighterDirective,
    DropdownDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
