import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username : string;
  constructor() { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('authUser'));
    this.username=user.username;
  }

}
