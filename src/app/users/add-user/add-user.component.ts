import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild("userForm")
  userForm: NgForm;
  alertMessage:String;
  addSuccess:boolean;
  requestProcessed:boolean;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  createUser(form: NgForm){
    var value = form.value;
    this.userService.createUser(value).subscribe(data => {
      this.alertMessage = "User is created successfully with ID: "+data;
      this.addSuccess = true;
      this.requestProcessed = true;
      this.userForm.reset();
    },
    error => {
      this.alertMessage = error.error;
      this.addSuccess = false;
      this.requestProcessed = true;
    });
  }
}
