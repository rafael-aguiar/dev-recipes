import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/Ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Batata', '500g'),
    new Ingredient('Bacon', '100g'),
  ];

  constructor() {}

  ngOnInit(): void {}
}
