import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-firebaselogin',
  templateUrl: './firebaselogin.component.html',
  styleUrls: ['./firebaselogin.component.css']
})
export class FirebaseloginComponent implements OnInit {

  userform: FormGroup = new FormGroup({
    _UserName: new FormControl('', []),
    _Password: new FormControl('', [])
  })

  userlist = [];

  constructor(public authentication: AuthenticationService) { }

  ngOnInit() {
    var x = this.authentication.getUserData();
    x.snapshotChanges().subscribe(item => {
      this.userlist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        console.log(y)
        this.userlist.push(y);
      })
    })
  }

  onSubmit(value) {
    const data = this.authentication.getUserData();
    if (this.userlist.includes(value._UserName) && this.userlist.includes(value._Password)) {
      alert("Welcome Login SucessFull");
      this.userform.reset();
    }
    else {
      alert("May Be You have Entered Wrong UserName or Password");
      this.userform.reset();
    }
  }
}
