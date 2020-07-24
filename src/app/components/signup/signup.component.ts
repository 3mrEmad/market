import { Component, OnInit } from '@angular/core';
import {NgForm}  from '@angular/forms';
import {AuthService}   from "../../services/auth.service";
import {UsersService}   from '../../services/users.service';
import {User}  from '../signup/user.model';
import {Router} from '@angular/router';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _UsersService:UsersService ,private router:Router) { }

  ngOnInit(): void {
  
   this._AuthService.user
   .subscribe((user)=>{
     if(user){
       this.router.navigate(['/home']);
     }
   })
   
  }

  message:string = '';
  signUp(form:NgForm){
    
 const email = form.value.email;
 const password  = form.value.password;
 const name = form.value.name;
 const phone = form.value.phone;
this._AuthService.signup(email , password)
.then(
(data)=>{
  this.message  =''
  this._UsersService.addUser(data.user.uid, name , phone) 

}
)
.then(
 ()=>{
    this.router.navigate(['/home']);
 }
)
.catch(
  (err)=>{
    this.message = "please enter valied email";
  }
)

form.reset();
  }


}
