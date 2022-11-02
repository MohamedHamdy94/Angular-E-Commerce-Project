import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { CounterService } from 'src/app/services/counter.service';
import productsList from '../../../assets/products.json';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  faStar=faStar;
  faStarHalfStroke=faStarHalfStroke;
  product :any;
  productList:any;
  activeID :number=1;
  constructor( private  CounterService: CounterService,private productService:ProductService,private activatedRoute : ActivatedRoute) {
   const ID = this.activatedRoute.snapshot.params['id']
    this.productList=productsList;
  this.activeID=  parseInt( ID)
  }
  ngOnInit(): void {

    console.log(this.activeID);
    // this.productService.getProduct(this.activeID).subscribe((data:IProduct)=>{
    //   console.log(data);
    //   this.product=data;
    // })
    console.log(this.productList)

this.product= productsList.find((x:any) => x.id === this.activeID);
//  productsList.map((x:any) => {
//   x.id ===this.activeID
//   x=this.product
// });
console.log( productsList.find((x:any) => x.id ===this.activeID))
console.log(this.product)
  }
  addToCart(item: any){
    this.CounterService.addToCart(item);
  }
}
