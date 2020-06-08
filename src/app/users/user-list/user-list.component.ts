import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.fetchAllUsers().subscribe(data => {
    //   this.users = data;
    // });
    this.users = this.userService.fetchAllUsers();
  }
  
}
