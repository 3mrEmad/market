import { Component, OnInit } from '@angular/core';
import {AuthService}  from '../../services/auth.service';
import {Observable}  from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }

  isOpen:boolean = false;
  isUser:boolean = false;

  ngOnInit(): void {
   this._AuthService.user
   .subscribe(
     (user)=>{
       if(user) 
       {
             this.isUser = true;
             this._AuthService.userid = user.uid;
             
       }
        
    
       else
       {
        this.isUser = false;
       }
      
     }
   )

  }

  toggle(){
  this.isOpen=!this.isOpen 
  console.log(this.isOpen);
  }

  logout(){
   this._AuthService.logout()
   this._AuthService.userid = "";
   
  }


}
