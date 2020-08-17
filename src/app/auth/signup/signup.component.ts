import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {User} from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  constructor(private auth: AuthService) { }

  ngOnInit(): void { }

  onSignup(f: NgForm) {
   
    const user:User={
      email:f.value.email,
      password:f.value.password
    }
console.log(user.email,user.password)
    this.auth.signup(user);
  }
}
