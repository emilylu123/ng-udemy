import { CoursesService } from './courses/courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonInputComponent,
    CoursesComponent,
  ],
  imports: [BrowserModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
