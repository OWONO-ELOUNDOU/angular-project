import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from '../model/link.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl = 'api/shop.json'

  constructor(
    private http: HttpClient
  ) { }

  getShopData():Observable<Link[]>{
    return this.http.get<Link[]>(this.apiUrl);
  }
}
