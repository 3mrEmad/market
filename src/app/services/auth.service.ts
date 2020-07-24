import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable}  from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user:Observable<firebase.User> // to take the id of the logging or sign up user //
  userid:string = "";
  constructor(private _AngularFireAuth:AngularFireAuth) {
    this.user = _AngularFireAuth.user;  // will make a subscripe //
  
        
  } 

 


signup(email , password){
  return  this._AngularFireAuth.createUserWithEmailAndPassword(email , password);
  
}

 
signin(email , password){
   return this._AngularFireAuth.signInWithEmailAndPassword(email , password);
  
}


logout(){
 return  this._AngularFireAuth.signOut();

}

  


}
