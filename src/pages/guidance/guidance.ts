import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IframeschedulePage } from '../iframeschedule/iframeschedule';
import { ElearningPage } from '../elearning/elearning';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AlertController } from 'ionic-angular';


/**
 * Generated class for the GuidancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guidance',
  templateUrl: 'guidance.html',
})
export class GuidancePage {
guidancelist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public db: AngularFireDatabase, public alertCtrl: AlertController) {
      this.guidancelist = db.list('/guidancelist');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidancePage');
  }

  guidanceclicked(item){


          if(item.id == 1)
            this.navCtrl.push(IframeschedulePage, {});

          if(item.id == 2)
              {
                let alert = this.alertCtrl.create({
                title: item.header,
                subTitle: 'تحت التشيد',
                message:  ' ',
                buttons: ['موافق']
            });
            alert.present();
          }

            if(item.id == 3)
              this.navCtrl.push(ElearningPage, {});

              if(item.id == 4)
                  {
                    let alert = this.alertCtrl.create({
                      title: item.header,
                      subTitle: 'تحت التشيد',
                      message:  ' ',
                      buttons: ['موافق']
                  });
                  alert.present();
                  }

              if(item.id == 5)
                      {
                        let alert = this.alertCtrl.create({
                          title: item.header,
                          subTitle: 'تحت التشيد',
                          message:  ' ',
                          buttons: ['موافق']
                      });
                      alert.present();
                      }
            if(item.id == 6)
                              {
                                let alert = this.alertCtrl.create({
                                  title: item.header,
                                  subTitle: 'تحت التشيد',
                                  message:  ' ',
                                  buttons: ['موافق']
                              });
                              alert.present();
                              }

              if(item.id == 7)
                  {
                                    let alert = this.alertCtrl.create({
                                        title: item.header,
                                          subTitle: 'تحت التشيد',
                                      message:  ' ',
                                    buttons: ['موافق']
                                                });
                                      alert.present();
                  }

  }

}
