import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrls: ['./simplelogin.component.css']
})
export class SimpleloginComponent implements OnInit {

  _UserName: string;
  _Password: string;
  userlist = [];


  constructor(public authentication: AuthenticationService) { }

  ngOnInit() {
    var x = this.authentication.getUserData();
    x.snapshotChanges().subscribe(item => {
      this.userlist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        this.userlist.push(y);
      })
    })
  }

  onSubmit() {
    const data = this.authentication.getUserData();
    if (this.userlist.includes(this._UserName) && this.userlist.includes(this._Password)) {
      alert("Welcome Login SucessFull");
      this._UserName = "";
      this._Password = "";
    }
    else {
      alert("May Be You have Entered Wrong UserName or Password");
      this._UserName = "";
      this._Password = "";
    }
  }
}
