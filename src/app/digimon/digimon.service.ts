import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Data } from '@angular/router';
import { DigimonDetail } from './digimon-detail';

@Injectable({
  providedIn: 'root',
})
export class DigimonService {
  constructor(private http: HttpClient) {}

  private base_url = 'https://digi-api.com/api/v1/digimon';
  //https://digi-api.com/api/v1/digimon/1
  getDigimons(page: number): Observable<Data> {
    return this.http
      .get<Data>(`${this.base_url}?pageSize=20&page=${page}`)
      .pipe(
        tap((_) => console.log('fetched digimons')),
        catchError(this.handleError<Data>('getDigimons', []))
      );
  }

  getDetail(id: number): Observable<DigimonDetail> {
    return this.http.get<DigimonDetail>(`${this.base_url}/${id}`).pipe(
      tap((_) => console.log('fetched digimon detail')),
      catchError(this.handleError<DigimonDetail>('getDetail'))
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
