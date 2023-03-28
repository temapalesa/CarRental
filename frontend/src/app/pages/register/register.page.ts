import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  submitted = false;
  AddUserForm :FormGroup = new FormGroup({
    fullName : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    usertype : new FormControl(''),
    confirmPassword : new FormControl(''),
  });

  constructor(private users: UsersService, private router : Router) { }

  ngOnInit() {
  }

  addUser() {
   this.submitted = true;
   let userDetails = {
    fullname : this.AddUserForm.value.fullName,
    email : this.AddUserForm.value.email,
    password : this.AddUserForm.value.password,
    userType : this.AddUserForm.value.userType,
   }

   console.log(userDetails);

   this.users.registerUser(userDetails).subscribe((data:any) => {
    sessionStorage.setItem('loggedEmail', this.AddUserForm.value.email);
    console.log('added successfully');
    this.router.navigate(['/profile']);
   })

  }

}
