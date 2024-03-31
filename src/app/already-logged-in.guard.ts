import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AlreadyLoggedInGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Promise<boolean> {
    const auth = getAuth();
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user && user.emailVerified) {
          setTimeout(() => {
            this.router.navigate(['/digimon']);
          }, 0);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
}
