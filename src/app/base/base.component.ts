import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.pug',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @Input()
  usernames: string;


  constructor() {
  }

  ngOnInit() {

    console.log('username from base component----------------- ' + this.usernames);
  }

}
