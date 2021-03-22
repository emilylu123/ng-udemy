import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css'],
})
export class PersonInputComponent {
  // listen from outside with @Output()
  @Output()
  personCreate = new EventEmitter<string>();
  enteredPersonName: string = '';
  onCreatePerson() {
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
