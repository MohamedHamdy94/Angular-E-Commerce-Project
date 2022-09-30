import { Component, OnInit } from '@angular/core';
import {Product} from '../../interfaces/product';
import productsList from '../../../assets/products.json';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // products:Product[] =productList;
  products:any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    // console.log( this.products)
    // this.productService.products.subscribe((res:any) => {
    //     res.forEach((a: any) => {
    //       Object.assign(a, { quantity: 1, total:a.quantity*a.price});
    //      })
    //     this.products = res;
    //   }
    // )
    // this.products =  this.productService.getProductList()
  this.products =  this.productService.products
  // .forEach((a: any) => {
  //           Object.assign(a, { quantity: 1, total:a.quantity*a.price});
  //         })
   
console.log( this.products)



}
}