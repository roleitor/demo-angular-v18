import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartListComponent } from '../cart-list/cart-list.component';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-nav-bar-cart',
  standalone: true,
  imports: [CommonModule, CartListComponent],
  templateUrl: './nav-bar-cart.component.html',
  styleUrl: './nav-bar-cart.component.css',
})
export class NavBarCartComponent {
  private storeService = inject(StoreService);
  displayMenu: string;
  myCart$ = this.storeService.myCart$;
  constructor() {
    this.displayMenu = 'none';
  }
}
