import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggingIn: boolean = false;
  userName: string = '';
  isLoggedIn: boolean = false;

  constructor() {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      this.userName = storedName;
      this.isLoggedIn = true;
    }
  }

  toggleLogin() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  login(nameInput: HTMLInputElement) {
    const name = nameInput.value.trim();
    if (name.length > 0) {
      this.userName = name;
      this.isLoggedIn = true;
      localStorage.setItem('userName', name);
      this.isLoggingIn = false;
    }
  }

  logout() {
    localStorage.removeItem('userName');
    this.userName = '';
    this.isLoggedIn = false;
  }
}
