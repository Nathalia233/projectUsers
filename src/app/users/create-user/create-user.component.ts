import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: '',
    id: '',
    createdAt: new Date() ,
  }

  response!: ResponseCreate;

  constructor(private userService:UsersService) { }

  ngOnInit() {
  }

  save(){
    this.userService.CreateUsers(this.request).subscribe(res=>{
      this.response = res;
    });
  }

}
