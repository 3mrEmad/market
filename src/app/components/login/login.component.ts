import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService}  from '../../services/auth.service';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService , private router:Router) { }

  ngOnInit(): void {

    this._AuthService.user
    .subscribe((user)=>{
      if(user){
        this.router.navigate(['/home']);
      }
    })


  }

    message:string;
  login(form:NgForm){
   const email = form.value.email;
   const password =  form.value.password;

    this._AuthService.signin(email ,password)
    .then(
     (result)=>{
       
       this._AuthService.user
       .subscribe(
         (user)=>{}

       )
       this.message ='';
      }    
    ).then(
  ()=> { this.router.navigate(['./home'])}
      
    )

    .catch(
      (error)=>{
        this.message = error.message;
      }
    )

    form.reset();

  }



}
