import { Injectable } from '@angular/core';


/*
  Generated class for the MyfirebaseDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MyfirebaseDataProvider {

itemFirebase: any;
  constructor() {
    console.log('Hello MyfirebaseDataProvider Provider');
    this.itemFirebase = [
      {header: 'header 1', shorttext: 'short text 1' }
    ];
  }

}
