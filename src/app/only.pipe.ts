import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course'
import { Category } from './category'

@Pipe({
  name: 'only'
})
export class OnlyPipe implements PipeTransform {

  transform(courses: Course[], category: Category): any {
    return category
      ? courses.filter(course => course.category.category_id == category.category_id)
      : courses
  }

}
