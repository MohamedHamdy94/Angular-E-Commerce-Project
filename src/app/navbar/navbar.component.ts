import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CounterService } from '../services/counter.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  counter :number=0;
  faCartShopping=faCartShopping;
  constructor(private CounterService : CounterService) { }

  ngOnInit(): void {
this.CounterService.productList.subscribe(res=>{
      this.counter = res.reduce((a:any,b:any)=>a+b.quantity,0);

    // this.counter = res.length;
  });

  }
}
