import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  // styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  title = 'List of Courses';
  courses: string[];
  constructor(service: CoursesService) {
    // dependency injection
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }

  ngOnInit() {}
}
