import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.pug',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  viewHomePage = true;

  constructor() {
  }

  ngOnInit() {
  }

  goToRegisterLoginPage() {
    this.viewHomePage = false;
  }
}
