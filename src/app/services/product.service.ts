import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from '../interfaces/iproduct';
import Products from '../../assets/products.json';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public ProductsList = new BehaviorSubject<any>([]);
  constructor(private httpClient:HttpClient) {   }
  getProductsList():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products');
  }
  getProducts(){
this.ProductsList.next(Products) 
return this.ProductsList
  }
  getSearch(){

  }
  getProduct(id:any):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`https://fakestoreapi.com/products/${id}`)
  }
}
