import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  constructor(public http: HttpClient) {}

  getListDetails() {
    return this.http
      .get("assets/data/products.json")
      .pipe(map((response: Response) => response.json()));
  }
}
