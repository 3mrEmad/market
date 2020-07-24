//import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {NgModule} from '@angular/core';
import {AuthguardsService}  from './services/authguards.service'; 



const routes: Routes = [

  { path:'' , component: HomeComponent},
  { path:'home' , component: HomeComponent},
  { path:'signin' , component: LoginComponent},
  { path:'signup' , component: SignupComponent},
  { path:'cart' , component: CartComponent , canActivate: [AuthguardsService]},
  { path:'admin' , component: AdminComponent},
  { path:'**' , component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
