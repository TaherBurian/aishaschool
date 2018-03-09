import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaplocationPage } from '../maplocation/maplocation';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ContactusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }

  showlocation(){
      this.navCtrl.push(MaplocationPage, {

      });
    }

    showcontactinfo(){
      let alert = this.alertCtrl.create({
    title:'<img src="assets/img/contact.png"/>  <h1>معلومات الاتصال  </h1>',
    subTitle: '<h2>هاتف 00974 - 44596353 </h2>' + '<h2>فاكس 00974 - 44596355</h2>' +'<h2>بريد اليكتروني m.al-rahmah@hotmail.com</h2>' + '<h2>موقعنا Al Gharrafa, Doha</h2>',
    message:  '',
    buttons: ['موافق']
    });
    alert.present();

    }


}
