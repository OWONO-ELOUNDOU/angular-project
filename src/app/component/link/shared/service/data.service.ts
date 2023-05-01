import { Injectable } from '@angular/core';
import { Link } from '../model/link';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  /*
  // get all user from the firestore
  getAllLink() {
    return this.afs.collection('/Users').snapshotChanges();
  }

  // add user to firebase firestore
  addLink(link : Link) {
    link.id = this.afs.createId();
    return this.afs.collection('/Users').add(link);
  }

  // delete user from firestore
  deleteLink(link : Link) {
    return this.afs.doc('/Users/'+link.id).delete();
  }

  // update user data from firestore
  updateLink(link : Link) {
    this.deleteLink(link);
    this.addLink(link);
  }
  */
}
