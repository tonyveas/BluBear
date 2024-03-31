import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Usuario } from './usuario';

import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
  verifyPasswordResetCode,
  applyActionCode,
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private base_url = 'http://localhost:8080/signup';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  registerUser(user: Usuario): Observable<any> {
    return this.http.post(this.base_url, user, this.httpOptions).pipe(
      tap((_) => console.log('createHeroe method executed')),
      catchError(this.handleError<any>('createHeroe'))
    );
  }

  login(user: Usuario): Observable<any> {
    return this.http.post(this.base_url, user, this.httpOptions).pipe(
      tap((_) => console.log('createHeroe method executed')),
      catchError(this.handleError<any>('createHeroe'))
    );
  }

  private handleError<T>(
    operation = 'operation',
    result?: T
  ): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
