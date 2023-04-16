import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { ingredient } from "../shared/Ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 
        'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg',
        [
            new ingredient('Meat',1),
            new ingredient('Oil',1)
        ]),
        new Recipe('Another Test Recipe', 'This is simply a test', 
        'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg', 
        [
            new ingredient('chicken',1),
            new ingredient('Oil',1)
        ])
    ];

    getRecipes(){
        return this.recipes.slice();//This will create a new array with exact copy like Recipe
    }
}