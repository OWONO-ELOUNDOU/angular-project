import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from 'src/app/prestations/shared/model/house.model';
import { Activity } from '../../prestations/shared/model/activity.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Activity[] = [];

  cart: any;

  paiement = {
    cmd: 'start',
    rN: 'PAUL TESTEUR',
    rT: '696042700',
    rE: 'user01@gmail.com',
    rH: 'DF216B76193067807036203',
    rMt: '1000',
    rDvs: 'XAF',
    rMo: '1=MTN, 2=Orange, 3=Express Union, 5=Visa via UBA, 10=Dohone, 14= Visa via Wari, 15=Wari card, 16=Visa/MasterCard',
    source: 'DIGITAL DIRECT ASSISTANCE',
    endPage: 'https://windows237.net/home',
    cancelPage: 'https://windows237.net/cart',
    logo: 'assets/Images/icon/logo.png',
}

  constructor(
    private http: HttpClient
  ) { }

  addToCart(activity: Activity) {
    this.items.push(activity);
    localStorage.setItem('cart', JSON.stringify(this.items))
    console.log(this.items)
  }

  // store the cart in the local storage
  //cartPublic = localStorage.setItem('cart', JSON.stringify(this.items));

  getItems() {
    //JSON.parse(sessionStorage.getItem('cart'))
    return this.cart = JSON.parse(localStorage.getItem('cart') || '{}');
  }

  itemsCount() {
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  

  CreatePost() {
    this.http.post('https://www.my-dohone.com/dohone/pay', this.paiement, {
      headers: {
        "content-type": "application.json"
      }
    }).subscribe((res) => {
      console.log(res);
    })
  }
}
