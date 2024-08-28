import { Component, inject } from '@angular/core';
import { Product, ProductList } from '../product';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2';
import { NavBarCartComponent } from '../nav-bar-cart/nav-bar-cart.component';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NavBarCartComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productList: ProductList;
  products: Product[];
  private storeService = inject(StoreService);
  private productService = inject(ProductService);
  constructor() {
    this.productList = { products: [], total: 0, skip: 0, limit: 0 };
    this.products = [];
  }
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    Swal.fire({
      allowOutsideClick: false,
      text: 'Recuperando Información ...',
    });
    Swal.showLoading();
    this.productService.getProducts().subscribe({
      next: (resp) => {
        this.productList = resp as ProductList;
        this.products = this.productList.products;
        Swal.close();
      },
      error: (ex) => {
        console.log(ex);
        Swal.close();
      },
    });
  }
  addProductToCart(product: Product) {
    this.storeService.addProduct(product);
  }
}
