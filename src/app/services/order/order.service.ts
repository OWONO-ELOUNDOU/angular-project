import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private products: ProductResponseModel[] = [];
  private Server_url = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getSingleOrder(orderId: number) {
    return this.http.get<ProductResponseModel[]>(this.Server_url + '/order' + orderId).toPromise();
  }

}

interface ProductResponseModel {
  id: number;
  name: string;
  description: string;
  price: number;
  quantityOrdered: number;
  image: string;
}
