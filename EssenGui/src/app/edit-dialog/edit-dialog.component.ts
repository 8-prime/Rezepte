import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../category';
import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {

  @Input() actionButtonText: string = "";
  @Input() recipe: Recipe = new Recipe("","",[],[],[]);
  @Output() closeModalEvent = new EventEmitter<void>();

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


  closeModal(): void {
    // Perform any necessary actions when closing the modal
    this.closeModalEvent.emit();
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
    this.recipeService.postRecipe(this.recipe).subscribe(_ => {
      this.recipe = new Recipe('', '', [], [], []);
    });
    console.log('Submitted recipe:', this.recipe);
  }


  trackByFn(index: number, item: string): number{
    return index;
  }
}
