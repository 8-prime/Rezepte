import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EssenGui';

  recipeIds: number[] = []

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.recipeIds.push(index)
    }

  }
}
