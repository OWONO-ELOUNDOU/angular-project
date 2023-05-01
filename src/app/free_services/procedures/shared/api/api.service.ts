import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commisariat } from '../model/commisariat';

import { Procedure } from '../model/procedure.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl = 'api/procedure.json';
  private readonly policeUrl = 'api/police.json';

  constructor(private http: HttpClient) { }

  getAllProcedure(): Observable<Procedure[]>{
    return this.http.get<Procedure[]>(this.apiUrl)
  }

  getCommisariat(): Observable<Commisariat[]>{
    return this.http.get<Commisariat[]>(this.policeUrl);
  }
}
