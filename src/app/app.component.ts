import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showNavigation: boolean = true;
  currentUrl: string;

  constructor(private _router: Router) {
    _router.events.subscribe((url: any) => {
      this.currentUrl = url.url;
      if (this._router.url == '/' || this._router.url == '/login') {
        this.showNavigation = false;
      }
      else {
        this.showNavigation = true;
      }
    });

  }

}
