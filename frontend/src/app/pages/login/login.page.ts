import jwt_decode from "jwt-decode";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  submitted = false;
  decoded :any ;
  UserLoginForm :FormGroup = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),

  });
  users: any;

  constructor(private userservice: UsersService , private router : Router) { }

  ngOnInit() {
  }


  async login(){

    let loginDetails = {
      email : this.UserLoginForm.value.email,
      password : this.UserLoginForm.value.password
    }

    this.userservice.login(loginDetails).subscribe(async (data:any) => {
      this.decoded = jwt_decode(data.token); 

    await this.userservice.getUsers().subscribe((res :any) => {
        let result = res;
        this.users = result.filter((ress:any) => String(ress.email) === String(this.decoded.email))
        sessionStorage.setItem('loggedEmail', this.UserLoginForm.value.email);
        console.log('logged in successfully')
        this.router.navigate(['/profile']);
    })

  },(error:any) => {
      console.log(error);
    });
}}