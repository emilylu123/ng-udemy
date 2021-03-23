import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  private personListSubs: Subscription;

  constructor(private prsService: PersonsService) {}

  ngOnInit() {
    // this.personList = this.prsService.persons;
    this.personListSubs = this.prsService.personsChanged.subscribe(
      (persons) => {
        this.personList = persons;
      }
    );
    this.prsService.fetchPersons();
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
