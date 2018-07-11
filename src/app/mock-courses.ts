import { Course } from './course'
import { Category } from './category'

var js_category = { category_id: '11', title: 'Javascript' }
var tdd_category = { category_id: '12', title: 'TDD' }
var oop_category = { category_id: '13', title: 'OOP' }

export const COURSES: Course[] = [
  { course_id: '11', title: 'Curso Basico de Javascript', category: js_category },
  { course_id: '12', title: 'OOP com Javascript', category: oop_category },
  { course_id: '13', title: 'Trabalhando com DOM', category: js_category },
  { course_id: '14', title: 'Design Patterns com Javascript', category: oop_category },
  { course_id: '15', title: 'Javascript ES6', category: js_category },
  { course_id: '16', title: 'Teste Unitario com Javascript', category: tdd_category },
]
