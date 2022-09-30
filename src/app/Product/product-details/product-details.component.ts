import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CounterService } from 'src/app/services/counter.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails :any;
  product:any;
  activeID :any;
  constructor(private cartService : CounterService,private api:ProductService,private activatedRoute : ActivatedRoute) { 
    this.activeID = this.activatedRoute.snapshot.params['id']
  }
  ngOnInit(): void {
    const ActiveId = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.gitproductById(ActiveId).subscribe((product: Product) => {
      this.product = product;
      console.log(product);
    });
  }
  addToCart(item: any){
    this.cartService.addtoCart(item);
  }

}
