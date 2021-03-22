import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  getCourses() {
    return ['MCI', 'CNA', 'MBD', 'CV'];
  }
  constructor() {}
}
