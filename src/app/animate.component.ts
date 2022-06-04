// animate.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-animate',
  template: `<div class="myblock mx-auto"></div>`,
  styles: [`
  .myblock {
    background-color: green;
    width: 300px;
    height: 250px;
    border-radius: 5px;
    margin: 5rem;
  }
  `]
})

export class AnimateComponent {}