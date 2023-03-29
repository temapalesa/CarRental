import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  isLoggedIn: boolean = true;
  users :any ;

  EditUserForm:FormGroup = new FormGroup({
    address:new FormControl(''),
    phonenumber:new FormControl(''),
  });
   

  constructor(private router :Router, private authservice : UsersService) { }

  ngOnInit() {

    this.authservice.getUsers().subscribe((res:any) => {
      let result = res;
      
      this.users = result.filter((res:any) => String(res.email) === String(sessionStorage.getItem('loggedEmail')))
      console.log(this.users)
    })

  }

  logOut()
  {
    sessionStorage.clear();
   // sessionStorage.setItem('isLoggedIn','no');
    this.router.navigate(['/login']);
  } 


}
