import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isLoggedIn: boolean = true;

  constructor(private router :Router) { }

  ngOnInit() {
  }

  logOut()
  {
    sessionStorage.clear();
   // sessionStorage.setItem('isLoggedIn','no');
    this.router.navigate(['/login']);
  } 


}
