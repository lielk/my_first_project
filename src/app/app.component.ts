import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core'
import { map, Observable, pipe, timer } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import jsonData from './people.json'
let Data = jsonData

export interface People {
  id: Number
  first_name: String
  last_name: String
  email: String
  gender: String
  avatar: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() { }
  url = 'https://my.api.mockaroo.com/people.json?key=b541adc0'
  Data: People[] = Data
  // genders: String[] = []
  // gendersSet: String[] = []
  peoples: People[] = Data;

  receiveMessage($events: People[]) {
    if ($events === null) {
      this.peoples = Data
    }
    else {
      this.peoples = $events
    }
  }

  genders = this.peoples.map(t => t.gender)
  gendersSet = [...new Set(this.genders)];
  a = this.gendersSet.push("All")

  Gender = ""
  selectedGender = ""
  // peoples: People[] = this.Data
  asc = true;

  cleare() {
    this.peoples = this.Data
    this.selectedGender = ""
  }
  ascSort() {
    if (this.asc) {
      this.peoples.sort(ascCompare)
      this.asc = false
    }
    else {
      this.peoples.sort(ascCompare).reverse()
      this.asc = true
    }
  }

  valueSelected() {
    if (this.selectedGender === "All") {
      this.cleare()
    }
    else {
      this.peoples = (this.Data as People[]).filter(item => item.gender === this.selectedGender)
    }
  }

  dateTime: Observable<Date> = timer(0, 1000).pipe(
    map(() => {
      return new Date()
    })
  )
}

// ********************** helper functions **********************

function ascCompare(a: People, b: People) {

  if (a.first_name < b.first_name) {
    return -1
  }
  else if (a.first_name > b.first_name) {
    return 1
  }
  else {
    if (a.last_name < b.last_name) {
      return -1
    }
    else if (a.last_name > b.last_name) {
      return 1
    }
  }
  return 0
}
