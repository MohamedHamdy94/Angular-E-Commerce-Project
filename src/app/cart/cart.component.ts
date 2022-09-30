import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: any = [];
  totalPrice !: number ;
  public total !: number;
  totalItem=0
  constructor( private cartService : CounterService) {}
  ngOnInit(): void {

this.cartService.getCart()
.subscribe((res:any)=>{
  this.products = res;
  this.total = this.cartService.getTotalPrice();
  this.totalPrice = this.cartService.getTotalPrice()+20;

})

    this.cartService.getCart()
    .subscribe((res:any)=>{
      this.totalItem = res.length;
    })
console.log(this.products.lenght)
  }

  removeProducts(product:any){
    this.cartService.removeCartItem(product)
  }
  emptyCart(){
    this.cartService.removeAllCart()
  }

  increase(event: any, product:any){
    console.log(event.target.value);
    this.cartService.removeCartItem(product)
  }
  decrease(event: any, product:any){
    console.log(event.target.value);
    this.cartService.addtoCart(product)
  }
}
