import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myProducts: Product[];
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();
  constructor() {
    this.myProducts = [];
  }
  addProduct(product: Product) {
    this.myProducts.push(product);
    this.myCart.next(this.myProducts);
  }
}
