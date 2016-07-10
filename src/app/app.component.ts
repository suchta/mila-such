import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
// import {ROUTER_DIRECTIVES} from '@angular/router';

// import {HomeComponent} from './home/home.component';
// import {AboutComponent} from './about/about.component';
import {TestComponent} from './test.component';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    directives: [TestComponent],
    precompile: [TestComponent],
})

export class AppComponent implements OnInit{
  list: Number;
  names: String[];
  ngOnInit() {
    this.list = 10;

    this.names = ['Joe','Omar','Mila','Katie','Molly','Chi','Frog','Fluffy'];
  }

}
