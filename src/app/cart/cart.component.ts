import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { IProduct } from '../interfaces/iproduct';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  inputValue!:number
  productList: any = [];
  total: number = 0;
  Shipping: number = 0;
  allTotal:number=0
  items:number=0

  constructor(private counterService: CounterService ,private router :Router) {}
  ngOnInit(): void {
    this.productList = this.counterService.getProducts();
    console.log(this.productList)
      this.total = this.productList.reduce((a:any,b:any)=>a+b.totalPrice,0);
  }

  ngDoCheck(){
    this.productList = this.counterService.getProducts();
    this.total = this.productList.reduce((a:any,b:any)=>a+b.totalPrice,0);
  this.Shipping=  this.total*0.02
  this.allTotal=this.Shipping+this.total
this.items= this.productList.length
  }
  increase(product: IProduct) {
this.counterService.addToCart(product)
  }
  decrease(product: IProduct) {
this.counterService.clearSpeciProduct(product)
  }

  removeProduct(product: IProduct) {
this.counterService.deleteProduct(product)

  }

  emptyCart(){
this.counterService.removeCart()

  }
  sendOrder(){
    this.counterService.removeCart()
alert("order saved")
this.router.navigate(['']);
}
}
