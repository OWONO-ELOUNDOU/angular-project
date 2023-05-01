import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {Md5} from 'ts-md5';
import { CrudService } from '../services/transaction/crud.service';

@Component({
  selector: 'app-dohone-callback',
  templateUrl: './dohone-callback.component.html',
  styleUrls: ['./dohone-callback.component.css']
})
export class DohoneCallbackComponent implements OnInit {

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private crud: CrudService) { }

  md5 = new Md5();
  dohoneHashCode = "DF216B76193067807036203";

  ngOnInit(): void {
    this.notify();
    this.crud.GetTransactionsList()
      .snapshotChanges().subscribe((data) => {console.log(data);});
  }

  notify() {

    this.route.queryParams.subscribe((queryParams) => {
      const routeParams = JSON.parse(JSON.stringify(queryParams));

      const rI = routeParams.rI;
      const rMt = routeParams.rMt;
      const rDvs = routeParams.rDvs;
      const rH = routeParams.rH;
      const mode = routeParams.mode;
      const idReqDoh = routeParams.idReqDoh;
      const hash = routeParams.hash;
      const motif = routeParams.motif;

      this.httpClient.get('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/Transaction.json').subscribe((res) => {
          const transactions = JSON.parse(JSON.stringify(res));
          const localHash = this.md5.appendStr(idReqDoh+rI+rMt+this.dohoneHashCode).end();

          if(localHash === hash){
            console.log('is True')
            console.log(hash)
            console.log(localHash)
          }else{
            console.log('is False')
            console.log(hash)
            console.log(localHash)
          }
      });
    });
  }

}
