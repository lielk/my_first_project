import { Component} from '@angular/core'
import { map, Observable, timer } from 'rxjs'
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

  cleare() {
    this.peoples = this.Data
    this.selectedGender = ""
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
