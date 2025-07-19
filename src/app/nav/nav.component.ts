import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  burgeropen:boolean = false;

  toggleBurger() {
    if(!this.burgeropen) {
      this.burgeropen = true
      
    } else {
      this.burgeropen = false
      
    }

      console.log(this.burgeropen);
  }


    }
  




