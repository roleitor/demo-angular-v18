import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL_API: string = 'https://dummyjson.com/products';
private http = inject(HttpClient);
constructor() { }
getProducts(){
  return this.http.get(this.URL_API);
}

addProduct(product:Product){
  return this.http.post(`${this.URL_API}/add`,product);
}

updateProduct(product:Product){
  return this.http.put(`${this.URL_API}/${product.id}`,product)
}

removeProduct(id:number){
}
}
