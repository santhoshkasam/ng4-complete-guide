import { EventEmitter, Injectable } from "@angular/core";
import { ingredient } from "../shared/Ingredient.model";
import { Subject } from 'rxjs';
@Injectable()
export class ShoppingListService {
    // ingredientsChanged = new EventEmitter<ingredient[]>();
    ingredientsChanged = new Subject<ingredient[]>();

    private ingredients: ingredient[] = [
        new ingredient("Apples", 5),
        new ingredient("Tomatoes", 10)
    ];

    getIngredient() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: ingredient) {
        this.ingredients.push(ingredient);
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: ingredient[]) {
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}