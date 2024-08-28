import { createReducer, on } from '@ngrx/store';
import * as ShopActions from './shop-actions';
import { Product, CartItem } from '../models';

export interface ShopState {
  products: Product[];
  cart: CartItem[];
}
export const initialState: ShopState = {
  products: [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 699 },
    { id: 3, name: 'Headphones', price: 199 },
  ],
  cart: [],
};
export const shopReducer = createReducer(
  initialState,
  on(ShopActions.addToCart, (state, { product }) => {
    const existingItem = state.cart.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, { product, quantity: 1 }],
      };
    }
  }),
  on(ShopActions.removeFromCart, (state, { productId }) => ({
    ...state,
    cart: state.cart.filter((item) => item.product.id !== productId),
  })));
