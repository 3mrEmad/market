import { Injectable } from '@angular/core';
import { AngularFirestore}  from '@angular/fire/firestore';
import {AngularFireStorage}   from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fs:AngularFirestore , private _AngularFireStorage:AngularFireStorage ) { }

getProducts(){
return this.fs.collection('products').snapshotChanges();
   //array of objects //
}


addProduct(name:string , price:number , image:any){

let ref = this._AngularFireStorage.ref('products/' + image.name);
ref.put(image).then(()=>{
  ref.getDownloadURL()
  .subscribe(
    (imageUrl)=>{
       this.fs.collection('products')
       .add({
         name,
         price,
         imageUrl
       })
         
       
              
    }
  )
  

})
 


}



}
