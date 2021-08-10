import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Ausie Cheese Fries',
      'Batata com Queijo e Bacon',
      'http://images.virgula.com.br/2018/01/aussie-fries.jpg'
    ),
    new Recipe(
      'Ausie Cheese Fries',
      'Batata com Queijo e Bacon',
      'http://images.virgula.com.br/2018/01/aussie-fries.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
