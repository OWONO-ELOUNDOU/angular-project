import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api/api.service';
import { activities, Activity, ServerResponse } from '../shared/model/activity.model';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
})
export class ActivityListComponent {

  public errMsg: string | undefined;

  constructor(
    private service: ApiService,
    private route: Router
  ) { }

  prestation = activities;
  convert = 650;
  price: number | undefined;

  ngOnInit() {

  }

  selectPrestation(id: number) {
    this.route.navigate(['/form', id]).then();
  }

}
