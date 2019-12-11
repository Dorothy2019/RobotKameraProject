import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, animation} from '@angular/animations';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
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
export class WelcomePageComponent implements OnInit {

  constructor(private router: Router) { }
  
  title = 'robotclient';
  isOpen = true;

  toggle(){
    this.isOpen = !this.isOpen;
  }

  goToTakePhoto(){
    this.router.navigateByUrl('/photo');
  }

  ngOnInit() {
   
  }

}
