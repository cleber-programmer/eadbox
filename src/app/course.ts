import { Category } from './category'

export class Course {
  course_id: string
  title: string
  category: Category|null
}