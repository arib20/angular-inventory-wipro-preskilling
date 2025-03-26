import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);

    if (error.status === 0 || error.status >= 500) {
      
      this.router.navigate(['/maintenance']);
    }

    return throwError(() => new Error(error.message || 'Server Error'));
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`).pipe(
      catchError(error => this.handleError(error))
    );
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/${id}`).pipe(
      catchError(error => this.handleError(error))
    );
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`).pipe(
      catchError(error => this.handleError(error))
    );
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/products`, product).pipe(
      catchError(error => this.handleError(error))
    );
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/products/${id}`).pipe(
      catchError(error => this.handleError(error))
    );
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/products/${product.id}`, product).pipe(
      catchError(error => this.handleError(error))
    );
  }
}
