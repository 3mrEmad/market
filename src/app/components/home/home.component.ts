import { Component, OnInit , OnDestroy, ViewChild, ElementRef } from '@angular/core';
import {Product}   from '../products/products.model';
import {ProductsService}  from '../../services/products.service'
import {Subscription  } from 'rxjs';
import {AuthService}   from '../../services/auth.service';
import {CartService}   from '../../services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit ,OnDestroy {
 
 @ViewChild('amount')amoutn:ElementRef;


  constructor(private _ProductsService:ProductsService  , private _AuthService:AuthService
    ,private _CartService:CartService  , private router:Router 
    ) { }

  products:any = [];
  productObservable:Subscription;

  ngOnInit(): void {

   this.productObservable =  this._ProductsService.getProducts().subscribe
    (
     (data) => {

     this.products = data.map(ele=>{
       return {
         id:ele.payload.doc.id,
         name:ele.payload.doc.data()['name'],
         price:ele.payload.doc.data()['price'],
         imageUrl:ele.payload.doc.data()['imageUrl']
       }
     })

     }
    )
    
  }

   productSelectesid:boolean = false;
   productIndex:number;
   
    
      
   addTocart(index){  
    this._ProductsService.getProducts().subscribe
     (
       (data)=>{
       data.map((ele , i)=>{
           if(i === index){
             this.productSelectesid = true; 
               this.productIndex = i; // this is the index of selected product //
            
           }
       }
     )
     
      }
     )  
  } 

  


 showOneproduct(index){
   if(this.productIndex === index){
     return true;
   }
 }

 isUser:boolean = false;
 buy(amount){
  if(this._AuthService.userid === ''){
    this.router.navigate(['/signin'])

  }
  else{
 let dataSelected = this.products[this.productIndex]
   let cartData = {
   name:dataSelected.name,
   price:dataSelected.price,
   amount:parseInt(amount)
   }
   this._AuthService.user
       this._AuthService.user
       this._CartService.addCart(cartData)
       .then(
         ()=> {this.productSelectesid = false  
         })  
 }
 this.amoutn.nativeElement.value = "";
}

 








ngOnDestroy(){
  this.productObservable.unsubscribe();
  
    }    
  
  }