import { Component, OnDestroy, OnInit } from '@angular/core';
import { ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: ingredient[];
  igChangedSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }
  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe();
  }
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    this.igChangedSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredient: ingredient[]) => { this.ingredients = ingredient; }
    );
  }

  onIngredientAdded(ingredient: ingredient) {
    // this.shoppingListService.getIngredient.push(ingredient);
  }
}
