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
    for (let index = 1; index < 11; index++) {
      this.recipeIds.push(index)
    }

  }

}
