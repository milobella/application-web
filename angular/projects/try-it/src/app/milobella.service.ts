import { Injectable } from '@angular/core';
import { MilobellaRequest } from './milobella-request';
import { MilobellaResponse } from './milobella-response';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MilobellaService {
  constructor(private http: HttpClient, private router: Router) {
  }

  invoke(request: MilobellaRequest): Observable<MilobellaResponse> {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || !user.token) {
      this.redirectToLogin();
    }
    return this.http.post<MilobellaResponse>('talk/text', request, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + user.token
      })
    }).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status && err.status === 401) {
          this.redirectToLogin();
        } else {
          throwError(err);
        }
        return of({vocal: '', visu: []});
      })
    );
  }

  private redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
