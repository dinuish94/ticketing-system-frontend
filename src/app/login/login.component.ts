import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  login(loginForm: NgForm): void {
    console.log(loginForm.value);
    let user = loginForm.value;

    if (user.username == null || user.username == "" || user.password == null || user.password == "") {
      swal(
        'Invalid Credentials!',
        'Username or Password is Incorrect',
        'error'
      )
    }
    else {
      let authObj = { "username": user.username, "password": user.password };
      this._loginService.authUser(authObj).subscribe(user => {
        console.log("USER", user);
        if(user.accountId == null){
          swal(
            'Invalid Credentials!',
            'Username or Password is Incorrect',
            'error'
          )
          return;
        }
        swal({
          title: 'Login Success!',
          text: 'Welcome ',
          type: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          console.log(user);
          localStorage.setItem("authUser", JSON.stringify(user));
          this.router.navigateByUrl('/home');
        });

      })

    }
  }

  visitorLogin(): void {
    let authObj = { "username": 1, "password": 1, "role": 3 };
    localStorage.setItem("authUser", JSON.stringify(authObj));
    this.router.navigateByUrl('/home');
  }
}
