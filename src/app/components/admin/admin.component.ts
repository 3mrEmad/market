import { Component, OnInit, ViewChild , ElementRef } from '@angular/core';
import {NgForm}   from '@angular/forms';
import {ProductsService}   from '../../services/products.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
@ViewChild('img') image:ElementRef 
  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {
  }

   //productData:any  = [];
  addProduct(form:NgForm){
  let name =  form.value.name,
   price = form.value.price,
   image = this.image.nativeElement.files[0]
  this._ProductsService.addProduct(name , price  , image); 
    form.reset();
  }

}