import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Sentences } from './sentences.model';


@Injectable({
  providedIn: 'root'
})
export class SentencesService {

  /**
   * Define the API.
   */
  private endpoint = '/api/v1/sentences';

  constructor(private http: HttpClient) { }

  /**
   * GET /api/v1/sentences
   * Fetch sentences.
   */
  getSentences(): Observable<Sentences> {
    return this.http.get<Sentences>(this.endpoint);
  }
}
