import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) : void {
    console.log(loginForm.value);
    let user = loginForm.value;

    if (user.username == null || user.username == "") {
      this.router.navigateByUrl('/login');
    }
    else {
      let authObj = { "id": user.username, "username": user.username, "password": user.password, "role": user.username };
      localStorage.setItem("authUser", JSON.stringify(authObj));
      this.router.navigateByUrl('/home');

    }
  }

  visitorLogin(): void {
    let authObj = { "username": 1, "password": 1, "role": 3 };
    localStorage.setItem("authUser", JSON.stringify(authObj));
    this.router.navigateByUrl('/home');
  }
}
