import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
declare var ShopifyBuy: Object;

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  this.shopifyClient = ShopifyBuy.buildClient({
    apiKey: '6559b53e69aeb0db205e92ef8f6c0703',
    myShopifyDomain: 'mila-such',
    appId: '6'
  });
  //this is my client, and it works well.
  this.shopifyClient.fetchAllProducts().then(
    function(value) {
      console.log("SUCCESS: " + value);
      //alert(value.length);
      //this.$q.defer().resolve();
      //value => this.AllProducts = value;
      //
    },//success
    function(reason) {
      return null;
    } // failure



  // Uses http.get() to load a single JSON file
  // getFoods() {
  // //  return this.http.get('/app/food.json').map((res:Response) => res.json());
  // }
  //
  // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
  // The entire operation will result in an error state if any single request fails.
  // getBooksAndMovies() {
  //   return Observable.forkJoin(
  // //    this.http.get('/app/books.json').map((res:Response) => res.json()),
  //   //  this.http.get('/app/movies.json').map((res:Response) => res.json())
  //   );
  // }

}
