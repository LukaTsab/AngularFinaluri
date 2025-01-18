import { Injectable } from '@angular/core';
import { interval, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private countdownTime = new BehaviorSubject<number>(8 * 24 * 60 * 60 * 1000); // 8 days in milliseconds
  public countdown$ = this.countdownTime.asObservable().pipe(
    map(time => {
      const days = Math.floor(time / (24 * 60 * 60 * 1000));
      const hours = Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((time % (60 * 1000)) / 1000);
      return { days, hours, minutes, seconds };
    })
  );

  private cartItems = [
    {
      image: 'assets/images/item1.jpg',
      name: 'HAVIT HV-G92 Gamepad',
      oldPrice: 160,
      newPrice: 120,
      rating: 4.5
    },
    {
      image: 'assets/images/item2.jpg',
      name: 'AK-900 Wired Keyboard',
      oldPrice: 160,
      newPrice: 96,
      rating: 4.0
    },
    // Add more items
  ];

  constructor() {
    interval(1000).subscribe(() => {
      const currentTime = this.countdownTime.getValue();
      this.countdownTime.next(currentTime - 1000);
    });
  }

  getCartItems() {
    return this.cartItems;
  }
}
