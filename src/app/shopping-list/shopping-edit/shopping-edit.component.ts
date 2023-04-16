import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;
  // @Output() IngredientAdded = new EventEmitter<ingredient>();

  constructor(private shoppingListService: ShoppingListService){

  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new ingredient(ingName, ingAmount);
    // this.IngredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
