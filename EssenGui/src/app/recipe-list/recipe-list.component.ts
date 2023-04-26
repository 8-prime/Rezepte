import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipeIds: number[] = []

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.recipeIds.push(index)
    }

  }

}
