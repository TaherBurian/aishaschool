import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActionSheetController } from 'ionic-angular';
import { TermsPage } from '../terms/terms';

/**
 * Generated class for the BeststudentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beststudents',
  templateUrl: 'beststudents.html',
})
export class BeststudentsPage {
yearFirebase: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public db: AngularFireDatabase,public actionSheetCtrl: ActionSheetController) {

    this.yearFirebase = db.list('/beststudents');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeststudentsPage');
  }



  yearclicked(year){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'الرجاء اختيار الصف',
      buttons: [
        {
          text: 'صف 10',
          role: 'destructive',
          icon: 'ios-archive',
          handler: () => {
            this.navCtrl.push(TermsPage, {
                  paramyear: year,
                  paramgrade: 'grade10'
              });
          }
        },{
          text: 'صف 11',
          icon: 'ios-archive',
          handler: () => {
            this.navCtrl.push(TermsPage, {
              paramyear: year,
              paramgrade: 'grade11'
              });
          }
        },
        {
          text: 'صف 12',
          icon: 'ios-archive',
          handler: () => {
            this.navCtrl.push(TermsPage, {
              paramyear: year,
              paramgrade: 'grade12'
              });
          }
        }
        ,{
          text: 'إلغاء',
          role: 'cancel',
          icon: 'ios-close-circle-outline',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
