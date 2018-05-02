import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String;
  email:String;
  username:String;
  password:String;

  constructor(private authService:AuthService,
  private routes:Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    console.log(user);

    // Register User
    this.authService.registerUser(user).subscribe(data=>{
    if(data){
      this.routes.navigate(['\login']);
    }
    });
  }

}
