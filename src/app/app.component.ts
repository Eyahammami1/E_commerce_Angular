import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-ecommerce';

  totalPrice: number=0.00;
  totalQuantity:number=0;
  constructor(private cartServices:CartService){}
  ngOnInit(): void {
    this.updateCartStatus();
  }
  updateCartStatus() {
     //subscribe to th cart totalPrice
     this.cartServices.totalPrice.subscribe(
      data=>this.totalPrice=data
     );
     //subscriba to the cart totalQuantity
     this.cartServices.totalQuantity.subscribe(
      data =>this.totalQuantity = data
     );
  }

}
