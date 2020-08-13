import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

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
    this.auth.signup(f.value.email, f.value.password);
  }
}
