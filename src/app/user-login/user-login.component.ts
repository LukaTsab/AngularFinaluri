// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-login',
//   standalone: true,
//   imports: [],
//   templateUrl: './user-login.component.html',
//   styleUrl: './user-login.component.css'
// })
// export class UserLoginComponent {

// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();
    if (this.authService.login(this.email, this.password)) {
      console.log('Login successful');
      this.router.navigate(['/user-pages']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-user-login',
//   templateUrl: './user-login.component.html',
// })
// export class UserLoginComponent {
//   email = '';
//   password = '';
//   errorMessage = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   onLogin(event: Event): void {
//     event.preventDefault();

//     if (this.authService.login(this.email, this.password)) {
//       console.log('Login successful');
//       this.router.navigate(['/users-pages']); // Change '/user-pages' if needed
//     } else {
//       this.errorMessage = 'Invalid email or password';
//     }
//   }
// }
// dashboard