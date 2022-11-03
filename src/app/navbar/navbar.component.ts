import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CounterService } from '../services/counter.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Products from '../../assets/products.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  counter :number=0;
  faCartShopping=faCartShopping;
  products:any
  public searchTerm:string='';

  constructor(private CounterService : CounterService ,private fb:FormBuilder) { }
public searchForm!:FormGroup;
  ngOnInit(): void {
this.CounterService.productList.subscribe(res=>{
      this.counter = res.reduce((a:any,b:any)=>a+b.quantity,0);
this.products=Products
    // this.counter = res.length;
  });
  this.searchForm=this.fb.group({
    search:['',[
      Validators.required
    ]]
  })
  }


  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.CounterService.search.next(this.searchTerm);
  }
}
