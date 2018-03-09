import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewslongPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newslong',
  templateUrl: 'newslong.html',
})
export class NewslongPage {
pagelongtext: any;
pageimage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewslongPage');
    let newslongtext = this.navParams.get('param1');
    this.pageimage = this.navParams.get('paramimg');

    this.pagelongtext = newslongtext;
  }

}
