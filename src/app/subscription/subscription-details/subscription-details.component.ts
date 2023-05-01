import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-subscription-details',
  templateUrl: './subscription-details.component.html',
  styleUrls: ['./subscription-details.component.css']
})
export class SubscriptionDetailsComponent implements OnInit {

  constructor() {
    render({
      id: "#myPaypalButtons",
      currency: "EUR",
      value: "100.00",
      onApprove: (details) => {
        Notification.requestPermission(perm => {
          if(perm === "granted") {
            const notification = new Notification("Windows237 Notification", {
              body: "Transaction Successfull!",
              icon: "assets/Images/icon/logo.png"
            })
            alert (notification);
          }
        })
      }
    })
  }

  ngOnInit(): void {
  }

}
