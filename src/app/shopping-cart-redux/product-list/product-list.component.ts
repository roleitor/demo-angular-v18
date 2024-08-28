import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models';
import * as ShopActions from '../store/shop-actions';
import { selectProducts } from '../store/shop-selectors';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products$: Observable<Product[]>;
  private store = inject(Store);
  constructor() {
    this.products$ = this.store.select(selectProducts);
  }

  addToCart(product: Product) {
    this.store.dispatch(ShopActions.addToCart({ product }));
  }
}
