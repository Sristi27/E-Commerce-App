import { Component, OnInit } from '@angular/core';
import {ProductDataService} from '../product-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor(private productData:ProductDataService) { }

  products:any;

  ngOnInit(){
    this.products=this.productData.getAllProducts();
    console.log(this.products)
    
  }

  
}
