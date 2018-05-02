import { Component, OnInit } from '@angular/core';

import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username:String;
  password:String;
  constructor(private appService: AppService,
  private router:Router) { }

  ngOnInit() {
  }
  loginCheck(){
    const user= {
      username: this.username,
      password : this.password
    }
    this.appService.loginUser(user).subscribe(data =>{
      if(data){
        this.router.navigate(['profile']);
      }else{
        this.router.navigate(['reset']);
      }
    });
  }
  loginFacebook() {
    this.appService.loginFacebook();
  }

  loginTwitter() {
    this.appService.loginTwitter();
  }

  loginGoogle() {
    this.appService.loginGoogle();
  }

  loginGithub() {
    this.appService.loginGithub();
  }

}
