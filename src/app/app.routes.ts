// import { Routes } from '@angular/router';

// export const routes: Routes = [];


// 2

// import { Routes } from '@angular/router';
// import { provideRouter } from '@angular/router';
// import { bootstrapApplication } from '@angular/platform-browser';

// import { UserLoginComponent } from './user-login/user-login.component';
// import { UserPagesComponent } from './user-pages/user-pages.component';
// import { AuthGuard } from './auth.guard';

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: UserLoginComponent },
//   { path: 'user-pages', component: UserPagesComponent, canActivate: [AuthGuard] },
// ];

// bootstrapApplication(UserLoginComponent, {
//   providers: [provideRouter(routes)],
// }).catch(err => console.error(err));


// 3
// import { Routes } from '@angular/router';
// import { provideRouter } from '@angular/router';
// import { bootstrapApplication } from '@angular/platform-browser';

// import { UserLoginComponent } from './user-login/user-login.component';
// import { UserPagesComponent } from './user-pages/user-pages.component';
// import { AuthGuard } from './auth.guard';

// export const routes: Routes = [ 
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: UserLoginComponent },
//   { path: 'user-pages', component: UserPagesComponent, canActivate: [AuthGuard] },
// ];

// bootstrapApplication(UserLoginComponent, {
//   providers: [provideRouter(routes)],
// }).catch(err => console.error(err));




// 4

import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserPagesComponent } from './user-pages/user-pages.component';
import { HomeComponent } from './user-pages/home/home.component';
import { AboutComponent } from './user-pages/about/about.component';
import { ContactComponent } from './user-pages/contact/contact.component';
import { CartComponent } from './user-pages/cart/cart.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  {
    path: 'user-pages',
    component: UserPagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default to 'home'
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'cart', component: CartComponent },
    ],
  },
];

bootstrapApplication(UserLoginComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
