import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  presentationImg : string = "assets/Images/round.png";

  constructor() { }

  ngOnInit(): void {
  }

}
