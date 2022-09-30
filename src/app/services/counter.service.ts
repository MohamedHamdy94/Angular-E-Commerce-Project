import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  public cartItemList: any = [];
  public search = new BehaviorSubject<string>('');

  constructor() {}
  getCart() {
    return this.cartItemList;
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
  }
  addtoCart(product: any) {
    const isFound = this.cartItemList.find((item:any) => item.id === product.id);
    if (!isFound) {
      this.cartItemList.push(product);
      this.getTotalPrice();
      console.log(this.cartItemList);
    }
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }
  removeCartItem(product: any) {
    // this.cartItemList.map((a: any, index: any) => {
    //   if (product.id === a.id) {
    //     this.cartItemList.splice(index, 1);
    //   }
    // } );
    const isFound = this.cartItemList.find(
      (item: Product) => item.id === product.id
    );
    if (isFound.quantity) {
      this.cartItemList.fillter((item: Product) => {
        item.id != product.id;
      });
    }
  }
  removeAllCart() {
    this.cartItemList = [];
    // this.cartList.next(this.cartItemList);
  }
}
