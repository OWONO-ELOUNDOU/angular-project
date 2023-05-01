import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service/cart.service';
import { render } from 'creditcardpayments/creditCardPayments';
import { Payment } from '../models/payment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  total: number | undefined;
  price = localStorage.getItem('amount')
  number = this.cartService.itemsCount();
  handler:any = null;
  CODEMARCHAND = "DF216B76193067807036203";
  convert = 650;
  cmPrice: number | undefined;
  converted = this.getTotal(this.items)

  paiement: Payment = {
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
    private cartService: CartService
  ) {
    
  }

  ngOnInit(): void {
    //if(this.items) this.getTotal(this.items);
    console.log(this.items);
    console.log(this.price);
    console.log(this.cmPrice);
    //this.loadStripe();
    //this.pay(this.price);
    //this.loadPayPal();
  }

  onSubmit(): void {
    // process checkout data
    this.items = this.cartService.clearCart();
    console.warn('Vos produits ont été envoyés');
    // this.cartForm.reset();
  }
  
  validateInput(event: any, i: number) {
    const qty = +event.target.value;
    if(qty < 1) {
      event.target.value = this.items[i].quantity;
      return;
    }

    this.QtyUpdated(qty, i);
  }

  private QtyUpdated(qty: number, i: number) {
    this.items[i].quantity = qty;

    this.getTotal(this.items);
    this.getCmrPrice(this.items);
  }

  getTotal(data: any) {
    let subs = 0;

    for(const item of data) {
      subs += item.price * item.quantity;

      this.total = subs;
      localStorage.setItem('amount', JSON.stringify(this.total))
    }

    return subs;
  }
  getCmrPrice(data: any) {
    let subs = 0;
    let cmrPrice = 0;

    for(const item of data) {
      subs += item.price * item.quantity;

      cmrPrice = subs * this.convert;
      this.cmPrice = cmrPrice;
      localStorage.setItem('cmrprice', JSON.stringify(cmrPrice))
    }

    return cmrPrice;
  }

  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MDA9KGsQevxDi0b92NKzE5EmVQ7nkHcVSCwjLsB8sEQlyHwftyUcphioj8Ka5YvLdcKf6BtFiUVGl5Z2hgCC1HY00jdAwv7Mc',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Windows237',
      description: this.cartService.itemsCount()+'produits',
      amount: amount * 100
    });
 
  }

  loadPayPal() {
    render(
      {
        id: "#myPaypalButtons",
        currency: "EUR",
        value: this.price || '{}',
        onApprove: (details) => {
          alert("Transaction successfull!")
        }
      }
    )
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MDA9KGsQevxDi0b92NKzE5EmVQ7nkHcVSCwjLsB8sEQlyHwftyUcphioj8Ka5YvLdcKf6BtFiUVGl5Z2hgCC1HY00jdAwv7Mc',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }

  dohoneApi() {
    this.cartService.CreatePost();
    console.log(this.paiement);
  }

}
