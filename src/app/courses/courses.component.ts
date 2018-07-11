import { Component, OnInit } from '@angular/core';
import { Course } from '../course'
import { CourseService } from '../course.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[]

  constructor(private courseService: CourseService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCourses()
  }

  getCourses(): void {
    this.courseService
        .getCourses()
        .subscribe(courses => this.courses = courses)
  }
}
