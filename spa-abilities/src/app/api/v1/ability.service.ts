import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Abilities, Ability } from './ability.model';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {
  /**
   * Define the API.
   */
  private endpoint = 'api/v1/abilities';

  /**
   * Common Http options
   */
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  /**
   * Common error handling
   * @param error error coming from http client
   */
  private static handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  /**
   * GET /api/v1/abilities
   * Fetch abilities by origin location.
   */
  public getAbilities(): Observable<Abilities> {
    return this.makeGetRequest<Abilities>('');
  }

  /**
   * GET /api/v1/abilities?from=cache
   * Fetch abilities from cache.
   */
  public getCacheAbilities(): Observable<Ability[]> {
    return this.makeGetRequest<Ability[]>('?from=cache');
  }

  /**
   * GET /api/v1/abilities?from=database
   * Fetch abilities from database.
   */
  public getDatabaseAbilities(): Observable<Ability[]> {
    return this.makeGetRequest<Ability[]>('?from=database');
  }

  /**
   * GET /api/v1/abilities?from=config
   * Fetch abilities from configuration.
   */
  public getConfigAbilities(): Observable<Ability[]> {
    return this.makeGetRequest<Ability[]>('?from=config');
  }

  /**
   * GET /api/v1/abilities/{id}
   * Fetch ability from database by id.
   */
  public getAbility(id: string): Observable<Ability> {
    return this.makeGetRequest<Ability>('/' + id);
  }

  /**
   * POST /api/v1/abilities
   * Create ability to the database.
   */
  public createAbility(ability: Ability): Observable<Ability> {
    return this.makePostRequest<Ability>(ability);
  }

  /**
   * DELETE /api/v1/abilities?from=cache
   * Clear all abilities from cache.
   */
  public clearCacheAbilities(ability: Ability): Observable<Ability[]> {
    return this.makeDeleteRequest<Ability[]>('?from=cache');
  }

  /**
   * DELETE /api/v1/abilities?from=database
   * Clear all abilities from database.
   */
  public clearDatabaseAbilities(ability: Ability): Observable<Ability[]> {
    return this.makeDeleteRequest<Ability[]>('?from=database');
  }

  /**
   * DELETE /api/v1/abilities/{id}
   * Remove an ability from database by id.
   */
  public removeAbility(id: string): Observable<Ability> {
    return this.makeDeleteRequest<Ability>('/' + id);
  }

  /**
   * A common function for all GET requests on abilities
   * @param endpoint coming after /api/v1/abilities (e.g. : endpoint = "/hello" -> request on "api/v1/abilities/hello")
   */
  private makeGetRequest<T>(endpoint?: string): Observable<T> {
    return this.http.get<T>(this.endpoint + endpoint, this.httpOptions)
      .pipe(
        retry(1),
        catchError(AbilityService.handleError)
      );
  }

  /**
   * A common function for all POST requests on abilities
   * @param ability will be serialized and set as the body
   * @param endpoint coming after /api/v1/abilities (e.g. : endpoint = "/hello" -> request on "api/v1/abilities/hello")
   */
  private makePostRequest<T>(ability: Ability, endpoint?: string): Observable<T> {
    return this.http.post<T>(this.endpoint + endpoint, JSON.stringify(ability), this.httpOptions)
      .pipe(
        retry(1),
        catchError(AbilityService.handleError)
      );
  }

  /**
   * A common function for all POST requests on abilities
   * @param endpoint coming after /api/v1/abilities (e.g. : endpoint = "/hello" -> request on "api/v1/abilities/hello")
   */
  private makeDeleteRequest<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(this.endpoint + endpoint, this.httpOptions)
      .pipe(
        retry(1),
        catchError(AbilityService.handleError)
      );
  }
}
