import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { People } from './app.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data: People[] | any;
  @Input() peoples: People[] | any;
  @Output() messageEvent = new EventEmitter<People[]>();
  constructor() {}
  ngOnInit(): void {
    this.data = this.peoples
  }

  sendMessage(result: People[]) {
    this.messageEvent.emit(result)
  }
  noFoundHandler = ""
  noFoundMsg = " User not found "
  interval: NodeJS.Timeout | undefined;
  Timeout = 0
  searchInput = ""

  Livesearch() {
    this.noFoundHandler = ""
    if (this.Timeout === 0) {
      this.Timeout = 1;
      this.interval = setTimeout(() => {
        this.Timeout = 0
        let result = []
        for (var people of this.data) {
          if ((people.first_name.toUpperCase() + " " + people.last_name.toUpperCase()).startsWith(this.searchInput.toUpperCase())) {
            result.push(people)
          }
          else if ((people.email.toUpperCase()).startsWith(this.searchInput.toUpperCase())) {
            result.push(people)
          }
        }
        this.sendMessage(result)
      }, 1000);
    }


  }
  search() {
    let result = []
    for (var people of this.data) {
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
    this.sendMessage(result)

  }

  clear() {
    this.sendMessage(this.data)
    this.searchInput = ""
    this.noFoundHandler = ""
  }
}

