import { Component, OnInit, Output ,EventEmitter,ViewChild, AfterViewInit} from '@angular/core'
import { map, Observable, pipe, timer } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { time } from 'console'
import { WSAELOOP } from 'constants'
import jsonData from './people.json'
import {CardComponent} from './card.component'
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

export class AppComponent  {

  // message: string="hello world "


  url = 'https://my.api.mockaroo.com/people.json?key=b541adc0'
  Data: People[] = Data
  // genders: String[] = []
  // gendersSet: String[] = []
  peoples: People[] = Data;

  genders = this.peoples.map(t => t.gender)
  gendersSet = [...new Set(this.genders)];
  a=this.gendersSet.push("All")

  Gender = ""
  searchInput = ""
  selectedGender = ""
  noFoundHandler = ""
  noFoundMsg = " User not found "
  // peoples: People[] = this.Data
  asc = true;
  interval: NodeJS.Timeout | undefined;
  Timeout = 0

  clear() {
    // this.sendData()
    this.peoples = this.Data
    this.selectedGender = ""
    this.searchInput = ""
    this.noFoundHandler = ""
  }
  try() {
    console.log("DASasdasd")
  }
  Livesearch() {

    if (this.Timeout === 0) {
      this.Timeout = 1;
      this.interval = setTimeout(() => {
        this.Timeout = 0
        let result = []
        for (var people of this.Data) {
          if ((people.first_name.toUpperCase() + " " + people.last_name.toUpperCase()).startsWith(this.searchInput.toUpperCase())) {
            result.push(people)
          }
          else if ((people.email.toUpperCase()).startsWith(this.searchInput.toUpperCase())) {
            result.push(people)
          }
        }
        this.peoples = result
      }, 1000);
    }


  }
  search() {
    let result = []
    for (var people of this.Data) {
      if ((people.first_name.toUpperCase() + " " + people.last_name.toUpperCase()) === (this.searchInput.toUpperCase())) {
        result.push(people)
      }
      else if ((people.email.toUpperCase()) === (this.searchInput.toUpperCase())) {
        result.push(people)
      }

    }
    if (result.length == 0) { this.noFoundHandler = this.noFoundMsg }
    else {
      this.noFoundHandler = ""
    }
    this.peoples = result
  }

  cleare() {
    this.peoples = this.Data
    this.selectedGender = ""
    this.searchInput = ""
    this.noFoundHandler = ""
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
    if(this.selectedGender==="All"){
      this.cleare()
    }
    else{
    this.peoples = (this.Data as People[]).filter(item => item.gender === this.selectedGender)
    this.noFoundHandler = ""
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
