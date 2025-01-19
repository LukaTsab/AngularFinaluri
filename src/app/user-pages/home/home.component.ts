// import { Component,OnInit } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { CartService } from '../services/cart.service';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit{

//   currentIndex = 0;
//   images = [
//     'assets/images/pot3.jpg',
//     'assets/images/pot2.jpg',
//     'assets/images/pot3.jpg',
//     'assets/images/pot4.jpg',
//     'assets/images/pot5.jpeg',
//   ];

//   previousSlide() {
//     this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
//   }

//   nextSlide() {
//     this.currentIndex = (this.currentIndex + 1) % this.images.length;
//   }

//   goToSlide(index: number) {
//     this.currentIndex = index;
//   }


//   countdown: any;
//   cartItems: any[] = [];

//   constructor(private cartService: CartService) {}

//   ngOnInit() {
//     this.cartService.countdown$.subscribe(timer => {
//       this.countdown = timer;
//     });
//     this.cartItems = this.cartService.getCartItems();
//   }


// // carousel

// currentIndex = 0;
// cards = [
//   {
//     image: 'https://source.unsplash.com/random',
//     title: 'Card 1',
//     description: 'Info which directs to the other page.',
//   },
//   {
//     image: 'https://source.unsplash.com/random',
//     title: 'Card 2',
//     description: 'Info which directs to the other page.',
//   },
//   {
//     image: 'https://source.unsplash.com/random',
//     title: 'Card 3',
//     description: 'Info which directs to the other page.',
//   },
//   {
//     image: 'https://source.unsplash.com/random',
//     title: 'Card 4',
//     description: 'Info which directs to the other page.',
//   },
//   {
//     image: 'https://source.unsplash.com/random',
//     title: 'Card 5',
//     description: 'Info which directs to the other page.',
//   },
// ];



// handleNext(): void {
//   this.currentIndex = (this.currentIndex + 1) % this.cards.length;
//   if (this.currentIndex > this.cards.length - 3) {
//     console.log(this.currentIndex);
//     this.currentIndex = 0;
//     console.log('hi');
//   }
// }

// handlePrev(): void {
//   this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
// }

// }



// 2
// import { Component, OnInit } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { CartService } from '../services/cart.service';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   // Independent indices for each carousel
//   imageCarouselIndex = 0; // For the image carousel
//   cardCarouselIndex = 0;  // For the card carousel

//   // Image carousel data
//   images = [
//     'assets/images/pot3.jpg',
//     'assets/images/pot2.jpg',
//     'assets/images/pot3.jpg',
//     'assets/images/pot4.jpg',
//     'assets/images/pot5.jpeg',
//   ];

//   // Card carousel data
//   cards = [
//     {
//       image: 'assets/imgaes/pot1',
//       title: 'Card 1',
//       description: 'Info which directs to the other page.',
//     },
//     {
//       image: 'https://source.unsplash.com/random',
//       title: 'Card 2',
//       description: 'Info which directs to the other page.',
//     },
//     {
//       image: 'https://source.unsplash.com/random',
//       title: 'Card 3',
//       description: 'Info which directs to the other page.',
//     },
//     {
//       image: 'https://source.unsplash.com/random',
//       title: 'Card 4',
//       description: 'Info which directs to the other page.',
//     },
//     {
//       image: 'https://source.unsplash.com/random',
//       title: 'Card 5',
//       description: 'Info which directs to the other page.',
//     },
//   ];

//   countdown: any;
//   cartItems: any[] = [];

//   constructor(private cartService: CartService) {}

//   ngOnInit() {
//     this.cartService.countdown$.subscribe(timer => {
//       this.countdown = timer;
//     });
//     this.cartItems = this.cartService.getCartItems();
//   }

//   // Image carousel methods
//   previousImageSlide() {
//     this.imageCarouselIndex = (this.imageCarouselIndex - 1 + this.images.length) % this.images.length;
//   }

//   nextImageSlide() {
//     this.imageCarouselIndex = (this.imageCarouselIndex + 1) % this.images.length;
//   }

//   goToImageSlide(index: number) {
//     this.imageCarouselIndex = index;
//   }

//   // Card carousel methods
//   handleNextCard(): void {
//     this.cardCarouselIndex = (this.cardCarouselIndex + 1) % this.cards.length;
//     if (this.cardCarouselIndex > this.cards.length - 3) {
//       console.log(this.cardCarouselIndex);
//       this.cardCarouselIndex = 0;
//       console.log('hi');
//     }
//   }

//   handlePrevCard(): void {
//     this.cardCarouselIndex = (this.cardCarouselIndex - 1 + this.cards.length) % this.cards.length;
//   }
// }




// 2
// import { Component, OnInit } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { CardService } from '../services/card.service';
// import { CartService } from '../services/cart.service';
// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   currentIndex = 0; // For the carousel
//   cardIndex = 0; // For card navigation
//   images = [
//     'assets/images/pot3.jpg',
//     'assets/images/pot2.jpg',
//     'assets/images/pot3.jpg',
//     'assets/images/pot4.jpg',
//     'assets/images/pot5.jpeg',
//   ];
// // cart
//   cards = [
//     { image: 'https://source.unsplash.com/random/1', title: 'Card 1', description: 'Info for Card 1' },
//     { image: 'https://source.unsplash.com/random/2', title: 'Card 2', description: 'Info for Card 2' },
//     { image: 'https://source.unsplash.com/random/3', title: 'Card 3', description: 'Info for Card 3' },
//     { image: 'https://source.unsplash.com/random/4', title: 'Card 4', description: 'Info for Card 4' },
//     { image: 'https://source.unsplash.com/random/5', title: 'Card 5', description: 'Info for Card 5' },
//   ];

//   countdown: any;
//   cardItems: any[] = [];

//   constructor(private cardService: CardService) {}

//   ngOnInit(): void {
//     this.cardService.countdown$.subscribe(timer => {
//       this.countdown = timer;
//     });
//     this.cardItems = this.cardService.getCardItems();
//   }

//   // Carousel methods
//   previousSlide(): void {
//     this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
//   }

//   nextSlide(): void {
//     this.currentIndex = (this.currentIndex + 1) % this.images.length;
//   }

//   goToSlide(index: number): void {
//     this.currentIndex = index;
//   }

//   // Card carousel methods
//   handleNextCard(): void {
//     if (this.cardIndex + 3 < this.cards.length) {
//       this.cardIndex++;
//     }
//   }

//   handlePrevCard(): void {
//     if (this.cardIndex > 0) {
//       this.cardIndex--;
//     }
//   }







//   products: any[] = [];
//   hoveredProduct: any = null;

//   constructor(private cartService: CartService, ) {}

//   ngOnInit(): void {
//     this.products = this.cartService.getProducts();
//   }

//   addToCart(product: any) {
//     this.cartService.addToCart(product);
//     alert(`${product.name} has been added to the cart!`);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardService } from '../services/card.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentIndex = 0; // For the carousel
  cardIndex = 0; // For card navigation
  images = [
    'assets/images/pot3.jpg',
    'assets/images/pot2.jpg',
    'assets/images/pot3.jpg',
    'assets/images/pot4.jpg',
    'assets/images/pot5.jpeg',
  ];
  cards = [
    { image: 'https://source.unsplash.com/random/1', title: 'Card 1', description: 'Info for Card 1' },
    { image: 'https://source.unsplash.com/random/2', title: 'Card 2', description: 'Info for Card 2' },
    { image: 'https://source.unsplash.com/random/3', title: 'Card 3', description: 'Info for Card 3' },
    { image: 'https://source.unsplash.com/random/4', title: 'Card 4', description: 'Info for Card 4' },
    { image: 'https://source.unsplash.com/random/5', title: 'Card 5', description: 'Info for Card 5' },
  ];
  countdown: any;
  cardItems: any[] = [];
  products: any[] = [];
  hoveredProduct: any = null;

  constructor(private cardService: CardService, private cartService: CartService) {}

  ngOnInit(): void {
    // Initialize the countdown from CardService
    this.cardService.countdown$.subscribe(timer => {
      this.countdown = timer;
    });

    // Get card items
    this.cardItems = this.cardService.getCardItems();

    // Get products from CartService
    this.products = this.cartService.getProducts();
  }

  // Carousel methods
  previousSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  // Card carousel methods
  handleNextCard(): void {
    if (this.cardIndex + 3 < this.cards.length) {
      this.cardIndex++;
    }
  }

  handlePrevCard(): void {
    if (this.cardIndex > 0) {
      this.cardIndex--;
    }
  }

  // Add product to cart
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  }
}
