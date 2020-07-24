import { Injectable } from '@angular/core';
import {AngularFirestore}   from '@angular/fire/firestore';
import {AuthService}   from '../services/auth.service';
  

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _AngularFirestore:AngularFirestore,private _AuthService:AuthService) { }

/*
   userid = this._AuthService.user
   .subscribe(
     (user)=>{
       return user.uid; 
     }
   )*/

 addCart(data){
  
  return this._AngularFirestore.collection(`users/${this._AuthService.userid}/cart` ) 
   .add(data);

 }


 getCartData(){
  return this._AngularFirestore.collection(`users/${this._AuthService.userid}/cart`) 
  .snapshotChanges();
 }


 deleteItem(id){
  return  this._AngularFirestore.doc(`users/${this._AuthService.userid}/cart/${id}`)
   .delete();
 }


 updateAmount( id , amount:number){

    this._AngularFirestore.doc(`users/${this._AuthService.userid}/cart/${id}`) 
    .update({
      amount
    })     
 }




}
