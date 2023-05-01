import { Injectable } from '@angular/core';
import { Transaction } from '../../models/transaction';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  transactionsRef!: AngularFireList<Transaction>;
  transactionRef!: AngularFireObject<Transaction>;
  constructor(private db: AngularFireDatabase) {}

  // Create Transaction
    AddTransaction(transaction: Transaction) {
      this.transactionsRef.push({
       name: transaction.name,
       email: transaction.email,
       phone: transaction.phone,
       status: transaction.status,
       date: transaction.date,
       details: transaction.details
      });
    }

    // Fetch Single Transaction Object
    GetTransaction(id: string) {
      this.transactionRef = this.db.object('Transaction/' + id);
      return this.transactionRef;
    }
    // Fetch Transaction List
    GetTransactionsList() {
      this.transactionsRef = this.db.list('Transaction');
      return this.transactionsRef;
    }

    // Update Transaction Object
    UpdateTransaction(transaction: Transaction) {
      this.transactionRef.update({
       name: transaction.name,
       email: transaction.email,
       phone: transaction.phone,
       status: transaction.status,
       date: transaction.date,
       details: transaction.details
      });
    }
    // Delete Transaction Object
    DeleteTransaction(id: string) {
      this.transactionRef = this.db.object('Transaction' + id);
      this.transactionRef.remove();
    }
}
