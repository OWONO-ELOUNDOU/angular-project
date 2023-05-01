import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from '../models/link';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private readonly schoolUrl = 'api/school.json';
  private readonly govUrl = 'api/government.json';
  private readonly embassyUrl = 'api/embassy.json';
  private readonly hotelUrl = 'api/hotel.json';
  private readonly bankUrl = 'api/bank_assurance.json';

  constructor(private http: HttpClient) { }

  getSchools():Observable<Link[]>{
    return this.http.get<Link[]>(this.schoolUrl);
  }

  getGov():Observable<Link[]>{
    return this.http.get<Link[]>(this.govUrl);
  }

  getEmbassies():Observable<Link[]>{
    return this.http.get<Link[]>(this.embassyUrl);
  }

  getHotels():Observable<Link[]>{
    return this.http.get<Link[]>(this.hotelUrl);
  }

  getBanks():Observable<Link[]>{
    return this.http.get<Link[]>(this.bankUrl);
  }
}
