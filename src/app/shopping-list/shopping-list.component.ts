import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredient: ingredient[]) => { this.ingredients = ingredient; }
    );
  }

  onIngredientAdded(ingredient: ingredient) {
    // this.shoppingListService.getIngredient.push(ingredient);
  }
}
