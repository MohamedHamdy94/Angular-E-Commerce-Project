import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import { CounterService } from 'src/app/services/counter.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  faStar=faStar
  faStarHalfStroke=faStarHalfStroke
  constructor(private router: Router, private counterService: CounterService ) {
  }
  counter:number = 0;
  cartProducts:any
  ngOnInit(): void {
    this.counterService.productList.subscribe(res=>{
      this.cartProducts=res
      this.counter = res.length;
    });
  }
  showDetails() {
    this.router.navigate(['', this.product.id])
  }
  addToCart(product:IProduct) {

console.log(product)
this.counterService.addToCart(product)
  }


}
