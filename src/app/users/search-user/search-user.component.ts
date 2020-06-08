import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  @ViewChild("searchForm")
  searchForm:NgForm;
  user:User;
  isDataPresent:boolean;
  requestProcessed:boolean;
  alertMessage:string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  searchUser(form:NgForm){
    this.userService.fetchUserById(form.value.id).subscribe(data => {
      this.user = data;
      this.isDataPresent = true;
      this.requestProcessed = true;
    }, 
    error => {
      this.user = undefined;
      this.isDataPresent = false;
      this.requestProcessed = true;
      this.alertMessage = error.error;
      // this.alertMessage = "User with ID "+form.value.id+" does not exist";
    });
  }
}
