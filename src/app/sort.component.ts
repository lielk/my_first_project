import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { People } from './app.component';


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
   asc = true;
  data: People[] | any;
  @Input() peoples: People[] | any;

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
}

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
  