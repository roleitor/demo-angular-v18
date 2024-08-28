import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartReduxRoutingModule } from './shopping-cart-redux-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { NavBarCartComponent } from './nav-bar-cart/nav-bar-cart.component';

@NgModule({
  declarations: [ProductListComponent, CartComponent, NavBarCartComponent],
  imports: [CommonModule, ShoppingCartReduxRoutingModule],
})
export class ShoppingCartReduxModule {}
