import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, animation} from '@angular/animations';
import {Router} from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('open',style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed',style({
        height: '200px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed',[animate('1s')]),
      transition('closed => open',[animate('0.5s')]),

  ]),

  ]

})
export class AppComponent {

  constructor(private router: Router) { }

  title = 'robotclient';
  isOpen = true;

  toggle(){
    this.isOpen = !this.isOpen;
  }

  goToTakePhoto(){
    this.router.navigateByUrl('/photo');
  }
}
