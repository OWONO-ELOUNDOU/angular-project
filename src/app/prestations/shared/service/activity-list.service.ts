import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activity } from '../model/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityListService {

  private ACTIVITY_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllActivities(numberOfResults = 10) {
    return this.http.get(this.ACTIVITY_URL + '/prestation', {
      params: {
        limit: numberOfResults.toString()
      }
    });
  }

  // create new service
  createService(data: any) {
    return this.http.post('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/service.json', data);
  }
}
