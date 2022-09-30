import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CounterService } from '../services/counter.service';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../interfaces/product';
@Component({
  selector: 'app-navbar',
  
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faStore = faStore;
  faMagnifyingGlass = faMagnifyingGlass;
  faCartShopping = faCartShopping;
public searchTerm:string='';
  public totalItem : number = 0;
    constructor(private cart : CounterService) { }

  ngOnInit(): void {

    // this.cart.getCart().subscribe(
    //   (val:any) => {
    //     let grandTotal = 0;
    //     val.map((a: any) => {
    //       grandTotal += a.total;
    //     });
    //     return this.totalItem== grandTotal;
    //   })

      // this.cart.cartItemList.map((a: any) => {
      //   this.totalItem += a.total;
      // });
        }



  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cart.search.next(this.searchTerm);
  }

}
