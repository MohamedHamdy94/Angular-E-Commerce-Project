import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.scss']
})
export class CartChildComponent implements OnInit {
  @Input() product: any;
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
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
}
