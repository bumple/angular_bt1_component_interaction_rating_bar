import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rate: any = 0;
  title = 'angular-rating-bar';
  abc(event: any) {
    this.rate = event;
  }
}
