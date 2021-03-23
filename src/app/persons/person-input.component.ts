import { PersonsService } from './persons.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css'],
})
export class PersonInputComponent {
  // listen from outside with @Output()
  // @Output()
  // personCreate = new EventEmitter<string>();

  enteredPersonName: string = '';

  constructor(private PersonsService: PersonsService) {}

  onCreatePerson() {
    // this.personCreate.emit(this.enteredPersonName);
    this.PersonsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
