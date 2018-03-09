import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NewslongPage } from '../newslong/newslong';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'news.html'
})


export class NewsPage {

items: FirebaseListObservable<any[]>;
itemFirebase: any;



  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {

this.itemFirebase = db.list('/news');

  }

  newsitemclicked( longtext, image){


        this.navCtrl.push(NewslongPage, {
    param1: longtext,
    paramimg: image
});
  }

}
