import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  login(){
    this.authService.login();
    this.router.navigateByUrl('/places/tabs/discover');
  }

  ngOnInit() {
  }

}
