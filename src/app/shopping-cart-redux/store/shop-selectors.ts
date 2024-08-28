import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShopState } from './shop-reducer';
import { CartItem } from '../models';
export const selectShopState = createFeatureSelector<ShopState>('shop');
export const selectProducts = createSelector(
  selectShopState,
  (state: ShopState) => state.products
);

export const selectCart = createSelector(
  selectShopState,
  (state: ShopState) => state.cart
);

export const selectCartTotal = createSelector(selectCart, (cart: CartItem[]) =>
  cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
);
