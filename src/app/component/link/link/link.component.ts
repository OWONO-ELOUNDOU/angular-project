import { Component, OnInit } from '@angular/core';
import { Link } from '../shared/model/link';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  link: Link[] = [];
  id : string = '';
  type : string = '';
  image : string = '';
  name : string = '';
  url : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  /*
  getAllLinks() {

    this.dataService.getAllLink().subscribe(res => {

      this.link = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching link data');
    })
      
  }

  deleteLink(link : Link) {
    if(window.confirm('Are you sure you want to delete this link'+link.name+' '+link.type+'?')) {
      this.dataService.deleteLink(link);
    }
  }
  */

}
