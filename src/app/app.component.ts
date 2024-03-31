import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  user!: User;
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('Executing ngOnInit() method - RegisterComponent');
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
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
      console.log(this.user);
      console.log('LOCAL STORAGE EXITS');
    } else {
      // console.log('No user is currently logged in');
    }
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        this.router.navigate(['/auth/login']);
      })
      .catch((error) => {
        console.error('Error signing out', error);
      });
  }
}
