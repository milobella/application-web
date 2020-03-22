import {Injectable} from '@angular/core';
import {MilobellaRequest} from './milobella-request';
import {MilobellaResponse} from './milobella-response';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MilobellaService {
  httpOptions = {
    headers: new HttpHeaders({
      // 'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  invoke(request: MilobellaRequest): Observable<MilobellaResponse> {
    return this.http.post<MilobellaResponse>('api/talk/text', request, this.httpOptions);
  }
}
