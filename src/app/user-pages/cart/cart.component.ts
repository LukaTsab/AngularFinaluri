// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.css'
// })
// export class CartComponent {

// }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [],
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent {}



// 2
// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CartService } from '../services/cart.service';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css'],
// })
// export class CartComponent implements OnInit {
//   cartItems: any[] = [];
//   totalPrice: number = 0;

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {
//     this.cartItems = this.cartService.getCartItems();
//     this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { FormsModule } from '@angular/forms'; // Import for two-way data binding

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  subtotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  updateCart(): void {
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.subtotal = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  returnToShop(): void {
    // Navigate back to the shop
    console.log('Returning to shop...');
  }
}
