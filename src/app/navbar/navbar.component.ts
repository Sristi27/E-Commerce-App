import { Component, OnInit } from '@angular/core';
import { Router, RouterState, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user:User;
  username;
  status=false;
  constructor(
    public router:Router,
    private auth:AuthService) { 
    this.username=this.auth.getName().split(" ")[0];
    this.status=this.auth.isAuth();
    
    }

  
  ngOnInit(): void {

  }
  logout(){
    this.auth.logoutUser();
    this.router.navigate(["/"]);
  }
   


}
