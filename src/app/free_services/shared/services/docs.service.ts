import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docs } from '../models/docs';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  private readonly apiUrl = 'api/file.json';

  constructor(
    private http: HttpClient
  ) { }

  //get all files
  getFile():Observable<Docs[]>{
    return this.http.get<Docs[]>(this.apiUrl)
  }
}
