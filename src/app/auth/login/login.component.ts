import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide=true;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  onLogin(f:NgForm){
 this.auth.login(f.value.email,f.value.password);
  }
}
