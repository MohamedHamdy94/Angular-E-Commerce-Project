import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../interfaces/iproduct';
import productList from '../../../assets/products.json';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  searchKey: string = '';

  products:any;
  category: any;

  constructor(private productService:ProductService,private CounterService : CounterService) { }

  ngOnInit(): void {
    // this.productService.getProductsList().subscribe(
    //   (data)=>{
    //     this.products=data;
    //   }
    // )
    // this.products= this.productService.getProducts()
    this.productService.getProducts().subscribe((res:any) => {
      this.products = res;
      this.category = res;
      this.products.forEach((a: any) => {
        if (
          a.category === "women's clothing" ||
          a.category === "men's clothing"
        ) {
          a.category = 'fashion';
        }
        // Object.assign(a, { quantity: 1});
      });
      console.log(this.products);
    });

    this.CounterService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
  

}
