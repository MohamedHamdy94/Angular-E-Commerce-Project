import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import productsList from '../../assets/products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] =productsList;
  theProducts:any;
  constructor(private httpClient: HttpClient) {}
  // getProductsList():Observable<Product[]>{
  //   return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  // }
    getProductList():Product[] {
      // this.products=this.theProducts
    return this.products;
  }

  gitproductById(id: any): Observable<Product> {
    return this.httpClient.get<Product>(
      `https://fakestoreapi.com/products/${id}`
    );
  }
}
