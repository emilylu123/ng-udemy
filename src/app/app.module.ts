import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonInputComponent,
    CoursesComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
