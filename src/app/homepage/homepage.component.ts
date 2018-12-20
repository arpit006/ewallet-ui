import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../model/User.model';
import {ProfileService} from './service/profile.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.pug',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  profileModel: UserModel = new UserModel();

  @Input()
  usernames: string;

  constructor(private profileService: ProfileService) {
    this.getUserDetails();
  }

  ngOnInit() {
    console.log('usernames--------' + this.usernames);

  }

  getUserDetails() {
    // this.profileService.showUserProfile(this.usernames).map(l => l.map(e => new UserModel(e))).subscribe();
  }

}
