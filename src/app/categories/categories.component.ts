import { Component, OnInit } from '@angular/core';
import { Category } from '../category'
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[]

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories()
  }

  onSelected(category: Category): void {
    this.categoryService.selectCategory(category)
  }

  onUnselected(): void {
    this.categoryService.unselectedCategory()
  }

  getCategories(): void {
    this.categoryService
        .getCategories()
        .subscribe(categories => this.categories = categories)
  }

}
