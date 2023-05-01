import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/prestations/shared/model/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl = 'api/activity.json';

  constructor(private http: HttpClient) { }

    // Get All data
    getAllData():Observable<Activity[]>{
      return this.http.get<Activity[]>(this.apiUrl);
    };
}
