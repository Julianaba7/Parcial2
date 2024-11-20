import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable, map } from 'rxjs';
import { Conferencia } from './conferencia';

@Injectable({
  providedIn: 'root'
})
export class ConferenciaService {

  private apiUrl: string = environment.baseUrl + 'conferencias';
  constructor(private http: HttpClient) { }

  getConferencias(): Observable<Conferencia[]>{
    return this.http.get<Conferencia[]>(this.apiUrl)
  }

  getUpcoming(): Observable<number>{
    return this.getConferencias().pipe(
      map(conferencias =>{
        if (conferencias.length === 0)return 0;
        )
      })
    )
  }
}
