import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/category';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {

  password: string = '';
  loggedIn: boolean = false;
  loading: boolean = true;
  categories: Category[] = [];
  showModal: boolean = false;
  category: Category = new Category("","",[]);
  actionButtonText: string = '';

  constructor(private recipeService: RecipeServiceService){}

  ngOnInit(): void{
    this.recipeService.getCategories().subscribe(result => {
      this.categories = result;
      this.loading = false;
    });
  }

  login(){
    this.loggedIn = this.recipeService.login(this.password);
    console.log(this.loggedIn);
    
  }

  add(){
    this.actionButtonText = 'Add category';
    this.category = new Category("","",[]);
    this.showModal = true;
  }

  edit(category: Category){
    this.actionButtonText = 'Edit category';
    this.category = category
    this.showModal = true;
  }

  delete(category: Category){

  }

  closeModal(){
    this.showModal = false;
    this.category = new Category("","",[]);
  }
}
