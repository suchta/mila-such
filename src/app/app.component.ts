import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
//
declare var ShopifyBuy: any;
//
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
    precompile: [TestComponent]
})

export class AppComponent implements OnInit{
  list: Number;
  names: String[];
  shopifyClient: any;
  productsArray: any;
  //
  ngOnInit() {
    this.list = 10;
    this.names = ['Joe','Omar','Mila','Katie','Molly','Chi','Frog','Fluffy'];
    //

    this.shopifyClient = ShopifyBuy.buildClient({
      apiKey: '6559b53e69aeb0db205e92ef8f6c0703',
      myShopifyDomain: 'mila-such',
      appId: '6'
    });
    //this is my client, and it works well.
    this.shopifyClient.fetchAllProducts().then(
      function(value: any) {
        //console.log("SUCCESS: " + value[0]);
        //alert(value.length);
        //this.$q.defer().resolve();
        //value => this.AllProducts = value;
        //
        for(var i = 0; i < value.length; i++){
          console.log(value[i].attrs.handle);
          //this.productsArray.push(value[i].attrs.handle);
        }
        //this.names=>this.productsArray;
      }
      //success
      // function(reason: any) {
      //   return null;
      // } // failure
    );
  }
}
