import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the PdfadminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdfadmin',
  templateUrl: 'pdfadmin.html',
})
export class PdfadminPage {
pdfFirebase: any;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController, public navParams: NavParams) {

    this.pdfFirebase = db.list('/pdf-list');
  }


pdfclicked(){

  let alert = this.alertCtrl.create({
  title: 'تغيير المعلومات',
  inputs: [
    /*{
      name: 'name',
      placeholder: 'اسم'
    },*/
    {
      name: 'link',
      placeholder: 'ربط'

    }
  ],
  buttons: [
    {
      text: 'إلغاء',
      role: 'cancel',
      handler: data => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'تغير',
      handler: data => {
        //var name = data['name'];
        var link = data['link'];
        firebase.database().ref('/pdf-list/pdf1').update({

            //name: name
            link: link
          });

      }
    }
  ]
});
alert.present();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfadminPage');
  }

}
