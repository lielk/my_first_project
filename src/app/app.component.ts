import { Component, OnInit } from '@angular/core'
import { map, Observable, pipe, timer } from 'rxjs'
import { HttpClient } from '@angular/common/http'



interface people {
  id: Number
  first_name: String
  last_name: String
  email: String
  gender: String
  avatar: String
}
//  let Data=[{"id":1,"first_name":"Giorgio","last_name":"Eastbrook","email":"geastbrook0@printfriendly.com","gender":"Male","avatar":"https://robohash.org/adipiscietest.png?size=50x50\u0026set=set1"}]

@Component({
  selector: 'app-root',
  template: `<app-animate></app-animate>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  url='https://my.api.mockaroo.com/people.json?key=b541adc0'
  Data:people[]=[]
  genders: String[]=[]
  gendersSet:String[]=[]
  constructor(private http: HttpClient){
    this.http.get(this.url).toPromise().then(jsonData=>{
      for (let i = 0; i < (jsonData as []).length; i++) {
        this.Data.push((jsonData as [])[i]);
      }
      this.genders = this.Data.map(t => t.gender)
      this.gendersSet = [...new Set(this.genders)];
    })
  }
  
  Gender = ""
  searchInput = ""
  selectedGender = ""
  noFoundHandler = ""
  noFoundMsg = " User not found "
  peoples: people[] = this.Data


  searchByName() {
    let result = []
    for (var people of this.Data) {
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
    for (var people of this.Data) {
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
    this.peoples = this.Data
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
    this.peoples = (this.Data as people[]).filter(item => item.gender === this.selectedGender)
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