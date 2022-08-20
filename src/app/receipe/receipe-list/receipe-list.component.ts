import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ManageReceipeService } from '../manage-receipe.service';
import { receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
  providers:[ManageReceipeService]
})
export class ReceipeListComponent implements OnInit {
ReceipeList:receipe[];

@Output() PassDataToReceipe=new EventEmitter<receipe>();

  constructor(private receipeobj:ManageReceipeService) { }

  OnPassingDataToReceipe(SelectedReceipe:receipe)
  {
    this.PassDataToReceipe.emit(SelectedReceipe);
  }

  ngOnInit(): void {
   this.ReceipeList= this.receipeobj.GetReceipe();
  }

  
 

}
