import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/classes/category';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-category-edit-dialog',
  templateUrl: './category-edit-dialog.component.html',
  styleUrls: ['./category-edit-dialog.component.css']
})
export class CategoryEditDialogComponent {

  @Input() actionButtonText: string = "";
  @Input() category: Category = new Category("","",[]);
  @Output() closeModalEvent = new EventEmitter<void>();

  constructor(private recipeService: RecipeServiceService){}

  closeModal(): void {
    // Perform any necessary actions when closing the modal
    this.closeModalEvent.emit();
    console.log('Modal closed');
  }
}
