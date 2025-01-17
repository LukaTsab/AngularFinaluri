import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { email: 'admin@example.com', password: 'admin' },
  ];
  private loggedIn = false;

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    this.loggedIn = !!user;
    return this.loggedIn;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
