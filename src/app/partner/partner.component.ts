import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  consultant = "assets/Images/partnership/consultant-financier.jpeg";
  office = "assets/Images/partnership/office.jpeg";

  constructor() { }

  ngOnInit(): void {
  }

}
