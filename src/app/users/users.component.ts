import { Component, OnInit } from '@angular/core';
import { ResponseUsers } from './users.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  responseUsers!: ResponseUsers 

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe( res => this.responseUsers = res)
  }

}
