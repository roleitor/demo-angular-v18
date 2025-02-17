import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent} from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component:ProductListComponent
    },
    {
    path:'cart-list',
    component:CartComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartReduxRoutingModule { }
