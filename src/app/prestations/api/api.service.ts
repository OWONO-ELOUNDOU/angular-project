import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activity, ServerResponse } from '../shared/model/activity.model';
import { House } from '../shared/model/house.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly ACTIVITY_URL = 'api/activity.json';

  private readonly apiUrl = 'api/diaspora.json';

  constructor(private http: HttpClient) { }

  // Get All Resident prestations data
  getResidentData():Observable<Activity[]>{
    return this.http.get<Activity[]>(this.ACTIVITY_URL);
  };

  // Get All Diaspora prestations data
  getDiasporaData():Observable<House[]>{
    return this.http.get<House[]>(this.apiUrl);
  };

}
