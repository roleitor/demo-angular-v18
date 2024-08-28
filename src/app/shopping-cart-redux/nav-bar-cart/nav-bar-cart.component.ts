import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models';
import { Store } from '@ngrx/store';
import { selectCart } from '../store/shop-selectors';

@Component({
  selector: 'app-nav-bar-cart',
  standalone: false,
  templateUrl: './nav-bar-cart.component.html',
  styleUrl: './nav-bar-cart.component.css',
})
export class NavBarCartComponent {
  cartItems$: Observable<CartItem[]>;
  displayMenu: string = 'none';
  constructor(private store: Store) {
    this.cartItems$ = this.store.select(selectCart);
  }
}
