import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  user!: User;
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const authorization = getAuth();
    onAuthStateChanged(authorization, (user) => {
      if (user && user.emailVerified) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  ngDoCheck(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser !== null) {
      this.user = JSON.parse(currentUser);
    } else {
    }
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.router.navigate(['/auth/login']);
      })
      .catch((error) => {
        console.error('Error signing out', error);
      });
  }
}
