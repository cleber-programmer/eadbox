import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Category } from './category'
import { CATEGORIES } from './mock-categories'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  selected: Category

  constructor() { }

  selectCategory(category: Category): void {
    this.selected = category
  }

  unselectedCategory(): void {
    this.selected = null
  }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES)
  }
}
