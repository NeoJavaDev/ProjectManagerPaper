import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: [

  ]
})
export class UserAddComponent implements OnInit {

  user: User | any;


  constructor() { }

  ngOnInit(): void {
    this.user = new User();
  }

}
