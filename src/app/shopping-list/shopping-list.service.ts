import { EventEmitter } from "@angular/core";
import { ingredient } from "../shared/Ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<ingredient[]>();
    private ingredients: ingredient[] = [
        new ingredient("Apples", 5),
        new ingredient("Tomatoes", 10)
    ];

    getIngredient() {
       return this.ingredients.slice();
    }

    addIngredient(ingredient: ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}