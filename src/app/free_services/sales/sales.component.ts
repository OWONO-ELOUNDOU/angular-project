import { Component, OnInit } from '@angular/core';
import { Link } from './shared/model/link.model';
import { ApiService } from './shared/service/api.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  shop: Link[] = [];

  constructor(
    private service: ApiService
  ) { }

  ngOnInit(): void {
    this.service.getShopData().subscribe({
      next: shop => this.shop = shop
    })
  }

}
