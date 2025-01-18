// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-pages',
//   standalone: true,
//   imports: [],
//   templateUrl: './user-pages.component.html',
//   styleUrl: './user-pages.component.css'
// })
// export class UserPagesComponent {

// }



// 2
// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-user-pages',
//   standalone: true,
//   imports: [RouterModule],
//   templateUrl: './user-pages.component.html',
//   styleUrls: ['./user-pages.component.css']
// })
// export class UserPagesComponent {

//   currentIndex = 0;
//   totalSlides = 5; // Total number of slides

//   previousSlide() {
//     this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
//   }

//   nextSlide() {
//     this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
//   }

//   goToSlide(index: number) {
//     this.currentIndex = index;
//   }
// }



// 3
// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives

// @Component({
//   selector: 'app-user-pages',
//   standalone: true,
//   imports: [RouterModule, CommonModule], // Ensure CommonModule is imported here
//   templateUrl: './user-pages.component.html', // Link to the HTML template
//   styleUrls: ['./user-pages.component.css'], // Link to the CSS styles
// })
// export class UserPagesComponent {
//   currentIndex = 0; // To track the current slide index
//   images = [
//     'assets/images/poto1.jpg',
//     'assets/images/poto1.jpg',
//     'assets/images/pot3.jpg',
//     'assets/images/poto4.avif',
//     'assets/images/poto5.avif',
//   ];

//   // Navigate to the previous slide
//   previousSlide() {
//     this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
//   }

//   // Navigate to the next slide
//   nextSlide() {
//     this.currentIndex = (this.currentIndex + 1) % this.images.length;
//   }

//   // Navigate directly to a specific slide
//   goToSlide(index: number) {
//     this.currentIndex = index;
//   }
// }

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-pages',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user-pages.component.html',
  styleUrls: ['./user-pages.component.css'],
})
export class UserPagesComponent {
 
}
