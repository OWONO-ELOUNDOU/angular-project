import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactImg = 'assets/Images/contact.png';

  constructor() { }

  ngOnInit(): void {
  }

}
