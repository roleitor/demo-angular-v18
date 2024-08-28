import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from '../models';
import * as ShopActions from '../store/shop-actions';
import { selectCart, selectCartTotal } from '../store/shop-selectors';
@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private store = inject(Store);
  cartItems$: Observable<CartItem[]>;
  total$: Observable<number>;
  constructor() {
    this.cartItems$ = this.store.select(selectCart);
    this.total$ = this.store.select(selectCartTotal);
  }

  removeFromCart(productId: number) {
    this.store.dispatch(ShopActions.removeFromCart({ productId }));
  }
}
