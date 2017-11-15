import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  roles: any;
  options: Option[];
  userId : String;
  userName : String;

  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('authUser'));
    this.userId = user.accountId;
    this.userName=user.username;

    this.getJSON().subscribe(data => {
      this.roles = data;
      console.log(this.roles);
      this.roles.forEach(role => {
        if (role.id == user.role) {
          this.options = role.options;
        }
      });
    }, error => console.log(error));
  }

  public getJSON(): Observable<any> {
    return this._http.get("/assets/json/navbar.json")
      .map((res: any) => res.json());

  }

  logout(): void {
    localStorage.removeItem('role');
    this._router.navigateByUrl('/login');
  }

}

interface Option {
  title: String;
  path: String;
}
