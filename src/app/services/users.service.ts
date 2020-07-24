import { Injectable } from '@angular/core';
import {AngularFirestore}   from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _AngularFirestore:AngularFirestore) {}

addUser( id , name ,phone ){

return this._AngularFirestore.doc('users/' + id).set(  // will create new document //
{
  name,
  phone
}
)



}



}
