import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '@app/models/cart';
import { Product } from '@app/models/product';
import { CartService } from '../../cart-state/cart.service';
import { CartQuery } from '../../cart-state/cart.query';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items$:Observable<(CartItem & Product)[]>;
  total$: Observable<number>;

  constructor(
    private cartQuery: CartQuery,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items$ = this.cartQuery.selectItems$;
    this.total$ = this.cartQuery.selectTotal$;
  }

  remove({productId}: CartItem) {
    this.cartService.remove(productId);
  }

}
