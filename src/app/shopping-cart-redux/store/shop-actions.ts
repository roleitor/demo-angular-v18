import { createAction, props } from '@ngrx/store';
import { Product } from '../models';
export const addToCart = createAction(
  '[Shop] Add To Cart',
  props<{ product: Product }>()
);

export const removeFromCart = createAction(
  '[Shop] Remove From Cart',
  props<{ productId: number }>()
);
