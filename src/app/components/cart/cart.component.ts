import { Component, OnInit } from '@angular/core';
import {CartService}   from '../../services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _CartService: CartService ) { }
   allCart:any = []; 
   cartIndex:number;
  ngOnInit(): void {
   this._CartService.getCartData()
   .subscribe(
    (data)=>{
     this.allCart =  data.map((userProduct , cartIndex)=>{
          return{
            id:userProduct.payload.doc.id,
            name:userProduct.payload.doc.data()['name'],
            price:userProduct.payload.doc.data()['price'],
            amoutn:userProduct.payload.doc.data()['amount']
          
          }
          
      })}
      
   ) }

 
   delete(index){
   this._CartService.deleteItem(this.allCart[index].id);
   }


  updateAmount(index){


this._CartService.updateAmount(this.allCart[index].id , this.allCart[index].amoutn)


  }






}
