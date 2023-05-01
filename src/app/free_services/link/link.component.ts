import { Component, OnInit } from '@angular/core';
import { LinkService } from '../shared/services/link.service';
import { Link } from '../shared/models/link';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  schools: Link[] = [];
  Banks: Link[] = [];
  hotel: Link[] = [];
  embassy: Link[] = [];
  gov: Link[] = [];
  image = "assets/Images/links/pharmacie.jpeg";

  constructor(private service: LinkService) { }

  ngOnInit(): void {
    this.service.getSchools().subscribe({
      next: schools => this.schools = schools
    })

    this.service.getBanks().subscribe({
      next: Banks => this.Banks = Banks
    })

    this.service.getEmbassies().subscribe({
      next: embassy => this.embassy = embassy
    })

    this.service.getGov().subscribe({
      next: gov => this.gov = gov
    })

    this.service.getHotels().subscribe({
      next: hotel => this.hotel = hotel
    })

    console.log(this.schools)
  }

  /*
  getAllLinks() {

    this.linkService.getAllLink().subscribe(res => {

      this.links = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching link data');
    })
      
  }
  */

}
