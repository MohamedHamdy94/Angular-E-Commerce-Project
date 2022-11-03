import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private products: IProduct[] = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  addToCart(product: IProduct) {
    const existItem = this.products.find((x) => x.id === product.id);
    console.log(existItem)
    if (existItem) {
      existItem.quantity = existItem.quantity + 1;
      existItem.totalPrice = existItem.price * existItem.quantity;
      this.products.map((x: any) => (x.id === existItem ? product : x));
      this.productList.next(this.products);
    } else {
     
      product.quantity=product.quantity+1
      product.totalPrice=product.price*product.quantity
      this.products.push(product);
      this.productList.next(this.products);
    }
  }

  clearSpeciProduct(product: IProduct) {
    const existItem = this.products.find((x) => x.id === product.id);

    if (existItem) {
      existItem.quantity = existItem.quantity - 1;
      existItem.totalPrice = existItem.price * existItem.quantity;
      this.products.map((x: any) => (x.id === existItem ? product : x));
      this.productList.next(this.products);
    } 
  }
  
  deleteProduct(product: IProduct) {
    console.log(this.products);

    this.products = this.products.filter((item) => item.id !== product.id);
    console.log(this.products);

    this.productList.next(this.products);
  }
  getProducts() {
    return this.products;
  }


  removeCart() {
    this.products = [];
    this.productList.next(this.products);
  }
}
