import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userlist: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getUserData() {
    this.userlist = this.firebase.list('User');
    return this.userlist;
  }

}
