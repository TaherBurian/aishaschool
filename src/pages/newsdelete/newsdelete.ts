import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
/**
 * Generated class for the NewsdeletePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsdelete',
  templateUrl: 'newsdelete.html',
})
export class NewsdeletePage {

  items: FirebaseListObservable<any[]>;
  itemFirebase: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {

    this.itemFirebase = db.list('/news');
  }

deletenews(item){

  var refkey = item.$key;

  firebase.database().ref('/news'+'/'+refkey+'/').remove();


}
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsdeletePage');
  }

}
