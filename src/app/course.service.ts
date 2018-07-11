import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Course } from './course'
import { COURSES } from './mock-courses'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(COURSES)
  }
}
