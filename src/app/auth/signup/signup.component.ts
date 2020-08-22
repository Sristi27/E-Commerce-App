import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  user: User;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void { }

  userGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    repeat: new FormControl("",
      [Validators.required, this.passwordMismatch])
  })
  //important return obj or null
  passwordMismatch(control: FormControl) {
    const password = control.root.get('password');
    return password && control.value !== password.value ? {
      passwordMatch: true
    } : null;
  }


  onSignup() {
    if (!this.userGroup.valid) return;
    const user = this.userGroup.getRawValue();
    this.auth.signup(user);
  }

}