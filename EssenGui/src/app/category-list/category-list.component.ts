import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  loading: boolean = true;

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit(): void {
    this.recipeService.getCategories().subscribe(categs => {
      this.categories = categs;
      this.loading = false;
    })
  }

}
