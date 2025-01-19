import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products = [
    { id: 1, name: 'Breed Dry Dog Food', price: 100, rating: 4.5, image: 'assets/images/product1.png' },
    { id: 2, name: 'Canon EOS DSLR Camera', price: 360, rating: 4.8, image: 'assets/images/product2.png' },
    { id: 3, name: 'ASUS FHD Gaming Laptop', price: 700, rating: 4.7, image: 'assets/images/product3.png' },
    { id: 4, name: 'Curology Product Set', price: 500, rating: 4.6, image: 'assets/images/product4.png' },
    { id: 5, name: 'Kids Electric Car', price: 960, rating: 4.9, image: 'assets/images/product5.png' },
    { id: 6, name: 'Jr. Zoom Soccer Cleats', price: 1160, rating: 4.7, image: 'assets/images/product6.png' },
    { id: 7, name: 'GP11 Shooter USB Gamepad', price: 660, rating: 4.5, image: 'assets/images/product7.png' },
    { id: 8, name: 'Quilted Satin Jacket', price: 660, rating: 4.5, image: 'assets/images/product8.png' },
  ];

  private cart: any[] = [];

  getProducts() {
    return this.products;
  }

  getCartItems() {
    return this.cart;
  }

  addToCart(product: any) {
    this.cart.push(product);
  }
}
