import { Component } from '@angular/core';
import { ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: ingredient[] =[
    new ingredient("Apples", 5),
    new ingredient("Tomatoes", 10)
  ];
}
