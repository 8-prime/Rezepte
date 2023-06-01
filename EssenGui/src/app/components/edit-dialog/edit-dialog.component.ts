import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/classes/category';
import { Recipe } from 'src/app/classes/recipe';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {

  @Input() actionButtonText: string = "";
  @Input() recipe: Recipe = new Recipe("","",[],[],[]);
  @Input() isNew: boolean = true;
  @Output() closeModalEvent = new EventEmitter<boolean>();


  loading: boolean = true;
  categories: Category[] = [];

  ngOnInit(): void{
    this.loading = true;
    this.recipeService.getCategories().subscribe(cats => {
      this.categories = cats;
      this.loading = false;
      console.log(this.categories);
    });
  }


  closeModal(result: boolean = false): void {
    // Perform any necessary actions when closing the modal
    this.closeModalEvent.emit(result);
    console.log('Modal closed');
  }

  constructor(private recipeService: RecipeServiceService){}


  
  addIngredient(): void {
    this.recipe.ingredients.push('');
  }

  removeIngredient(index: number): void {
    this.recipe.ingredients.splice(index, 1);
  }
  
  addInstruction(): void {
    this.recipe.instructions.push('');
  }

  removeInstruction(index: number): void {
    this.recipe.instructions.splice(index, 1);
  }

  addCategory(): void{
    this.recipe.categoryIds.push('');
  }

  removeCategory(index: number): void {
    this.recipe.categoryIds.splice(index, 1);
  }

  onSubmit(): void {
    if(this.isNew){
      this.recipeService.postRecipe(this.recipe).subscribe(_ => {
        this.closeModal(true);
      });
      console.log('Submitted recipe:', this.recipe);
    }
    else{
      
    }
  }


  trackByFn(index: number, item: string): number{
    return index;
  }
}
