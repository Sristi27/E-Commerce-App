import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products/products.component';


const routes: Routes = [

  {
    path: "login",
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: "signup",
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:"products",
    loadChildren:'./products/products.module#ProductsModule', //lazyloading
    pathMatch:"full"
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
