import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { jsPDF } from 'jspdf';
import { render } from 'creditcardpayments/creditCardPayments';
import {GeolocationService} from '@ng-web-apis/geolocation';
import { activities, Activity } from '../shared/model/activity.model';
import { ActivityListService } from '../shared/service/activity-list.service';
import { CartService } from '../../services/cart-service/cart.service';

import '../../shared/smtp.js';
import { House } from '../shared/model/house.model';
import { FormGroup } from '@angular/forms';

declare let Email : any;


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  errormsg: string | undefined;
  taskForm: FormGroup| undefined;
  logo = "assets/Images/icon/logo.png";
  product: Activity | any;
  product1: any;
  message: string | undefined;

  @ViewChild('form', {static: false}) el!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private readonly geolocation$: GeolocationService,
    private apiService : ActivityListService
  ) {
  }

  ngOnInit(): void {
    // get the activity id from the current route start

    const routeParams = this.route.snapshot.paramMap;
    const serviceParams = this.route.snapshot.paramMap;
    const activityIdFromRoute = Number(routeParams.get('id'));
    const serviceIdFromRoute = Number(serviceParams.get('Id'));
    console.log(activityIdFromRoute);
    console.log(serviceIdFromRoute);
    this.product = activities.find(activity => activity.Id === activityIdFromRoute);
    this.product1 = this.product.activity.find((activity: { id: number; }) => activity.id === serviceIdFromRoute);
    console.log(this.product1);
    localStorage.setItem('key', JSON.stringify(this.product));

    this.geolocation$.subscribe(position => doSomethingWithPosition(position));

  }

  makePDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.output('datauristring');
        let pdfBase64 = pdf.output('datauristring');
        //this.onSubmit();
      }
    });
  }

  onSubmit(task: {
    fname: string,
    lname: string,
    address: string,
    phone: string,
    rubrique: string,
    service: string,
    details: string,
    plus: string,
  }) {
    this.apiService.createService(task).subscribe((res) => {
      console.log(res);
    })
    /* 
    Email.send({
      SecureToken : "f063c153-4519-4c0a-92a7-5c5cc4e9339d",
      To : 'windows.237.01@gmail.com',
      From : "owonohermann54@gmail.com",
      Subject : "Prestation Sollicitée",
      Body : "FIchier de demande de prestation",
      Attachments : [
        {
          name : "Prestation demandée.pdf",
          data: data
        }]
    }).then(
      (message: any) => alert(message)
    );
    */
    
  }

  addToCart(product: Activity, task: {
    fname: string,
    lname: string,
    address: string,
    phone: string,
    rubrique: string,
    service: string,
    details: string,
    plus: string,
  }) {
    this.apiService.createService(task).subscribe((res) => {
      console.log(res);
    })
    this.cartService.addToCart(product);
    localStorage.setItem('key1', JSON.stringify(product));
    console.log(product);
    this.makePDF();
  }

}
function doSomethingWithPosition(position: GeolocationPosition): void {
  throw new Error('Function not implemented.');
}

