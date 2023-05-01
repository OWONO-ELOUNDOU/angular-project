import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  plusIcon = 'assets/Images/icon/plus-circle.svg';
  barsIcon = 'assets/Images/icon/bars.svg';

  isMenuOpen = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  itemCount() {
    return this.cartService.itemsCount();
  }

}
