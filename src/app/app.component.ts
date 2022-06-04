import { Component, OnInit } from '@angular/core'
import { time } from 'console'
import jsonData from './people.json'
import { map, Observable, pipe, timer } from 'rxjs'
// import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler'

let Data = jsonData

interface people {
  id: Number
  first_name: String
  last_name: String
  email: String
  gender: String
  avatar: String
}

@Component({
  selector: 'app-root',
  template: `<app-animate></app-animate>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Gender = ""
  searchInput = ""
  selectedGender = ""
  noFoundHandler = ""
  noFoundMsg = " User not found "
  peoples: people[] = Data;

  genders = this.peoples.map(t => t.gender)
  gendersSet = [...new Set(this.genders)];


  searchByName() {
    let result = []
    for (var people of Data) {
      if (people.first_name.toUpperCase() + " " + people.last_name.toUpperCase() == this.searchInput.toUpperCase()) {
        result.push(people)
      }
    }
    if (result.length == 0) { this.noFoundHandler = this.noFoundMsg }
    else {
      this.searchInput = ""
      this.noFoundHandler = ""
    }
    this.peoples = result

  }
  searchByEmail() {
    let result = []
    for (var people of Data) {
      if (people.email.toUpperCase() == this.searchInput.toUpperCase()) {
        result.push(people)
      }
    }
    if (result.length == 0) { this.noFoundHandler = this.noFoundMsg }
    else {
      this.searchInput = ""
      this.noFoundHandler = ""
    } this.peoples = result

  }

  reset() {
    this.peoples = Data
    this.selectedGender = ""
    this.searchInput = ""
    this.noFoundHandler = ""
  }

  ascSort() {
    this.peoples.sort(ascCompare)
  }
  dscSort() {
    this.peoples.sort(dscCompare)
  }

  valueSelected() {
    this.peoples = (Data as people[]).filter(item => item.gender === this.selectedGender)
    this.noFoundHandler = ""

  }

  dateTime: Observable<Date> = timer(0, 1000).pipe(
    map(() => {
      return new Date()
    })
  )
}

// ********************** helper functions **********************

function ascCompare(a: people, b: people) {

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

function dscCompare(a: people, b: people) {

  if (a.first_name > b.first_name) {
    return -1
  }
  else if (a.first_name < b.first_name) {
    return 1
  }
  else {
    if (a.last_name > b.last_name) {
      return -1
    }
    else if (a.last_name < b.last_name) {
      return 1
    }
  }
  return 0
}
