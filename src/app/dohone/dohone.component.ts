import { Component, OnInit } from '@angular/core';
import { Router, UrlTree} from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../services/cart-service/cart.service';

@Component({
  selector: 'app-dohone',
  templateUrl: './dohone.component.html',
  styleUrls: ['./dohone.component.css']
})

export class DohoneComponent implements OnInit {

  items = this.cartService.getItems();
  price = localStorage.getItem('amount');
  cmprice = localStorage.getItem('cmrprice');
  dohone_rH = "DF216B76193067807036203";
  dohone_endPoint = "https://my-dohone.com/dohone/pay";

  constructor(private cartService: CartService, private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
  }

  getTotal(data: any) {
    let sum = 0;

    for(const item of data) {
      sum += item.price * item.quantity;
    }
    return sum;
  }

  checkoutForm = this.formBuilder.group({
    rN: '',
    rE: '',
    rT: '',
    rI: '',
    cmd: 'start',
    rDvs: 'EUR',
    rH: this.dohone_rH,
    rMt: this.price,
    rLocale: 'fr',
    motif: "Paiement d'un article sur le site Windows 237",
    source: 'DIGITAL DIRECT ASSISTANCE',
    endPage: location.origin+'/home',
    cancelPage: location.origin+'/cart',
    notifyPage: location.origin+'/dohone/notify/callback',
    logo: location.origin+'/assets/Images/icon/logo.png',
    status: 'pending'
  });


  onSubmit() {
    this.httpClient.post('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/Transaction.json', this.checkoutForm.value).subscribe((res) => {
        const transaction = JSON.parse(JSON.stringify(res));

        this.checkoutForm.patchValue({
          rI: transaction.name,
        });

        const params = new URLSearchParams(this.checkoutForm.value);
        const formValue = this.checkoutForm.value;

        window.location.href = this.dohone_endPoint+'?'+params.toString();
    });
  }
}
