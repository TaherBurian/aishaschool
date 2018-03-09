import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SubachievsecurePage } from '../../pages/subachievsecure/subachievsecure';
import { CentersPage } from '../../pages/centers/centers';
import { HealthPage } from '../../pages/health/health';
import firebase from 'firebase';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the AchievementsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-achievements',
  templateUrl: 'achievements.html',
})
export class AchievementsPage {
  achievementslist: any;


  private _db: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ,  public db: AngularFireDatabase) {
      this.achievementslist = db.list('/achievementslist');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AchievementsPage');
  }

  achievitemclicked(item){

    if(item.cardid == 1)
      this.navCtrl.push(SubachievsecurePage, { });

    if(item.cardid == 2)
        this.navCtrl.push(CentersPage, { });

    if(item.cardid == 3)
        this.navCtrl.push(HealthPage, { });

    if(item.cardid == 4)
        {
          window.open('http://alibda3.net/main/', '_system');
        }

    if(item.cardid == 5)
            {
              let alert = this.alertCtrl.create({
          title: 'مدارس صديقة',
          subTitle: '</br> <img src="assets/img/madarissadiqa.jpg" style="" />',
          message:  '<p style="text-align: center;">&nbsp;</p><h4 style="text-align: center;"><span style="background-color: #ffff99;"><a style="background-color: #ffff99;" title="صفحة المدرسة على موقع المدارس الصديقة" href="http://schools.abegs.org/schools/aysha/">صفحة المدرسة على موقع المدارس الصديقة</a></span></h4><p style="text-align: center;">&nbsp;</p><h4 style="direction: rtl;"><strong><span style="font-size: medium;"><span style="color: #9d1811;">الرؤية</span>&nbsp;:&nbsp; مدارس صديقة رائدة</span></strong></h4><p>&nbsp;</p> <h4 style="direction: rtl;"><strong><span style="font-size: medium;"><span style="color: #9d1811;">الرسالة</span>&nbsp;: مدارس صديقة للمكتب على مستوى الدول الأعضاء، تمثل نموذجاً رائداَ في تطبيق أحدث الممارسات التربوية الناجحة.</span></strong></h4><p>&nbsp;</p><h4 style="direction: rtl;"><strong><span style="color: #9d1811; font-size: medium;">الأهداف :</span></strong></h4><p>&nbsp;</p><p style="direction: rtl;"><strong style="text-align: justify; font-size: medium;">تكوين بيئة مدرسية مناسبة حافزة على التعليم والتعلم.</strong></p><p style="direction: rtl;"><strong>توثيق الصلات والروابط بين المكتب ومدارس الدول الأعضاء.</strong></p><p style="direction: rtl;"><strong>إيجاد وسائل وأدوات للتعاون الفاعل بين المكتب والميدان التربوي.</strong></p><p style="direction: rtl;"><strong>إتاحة الفرصة لكل من الطالب والمعلم وإدارة المدرسة للاستفادة من منتجات المكتب في دعم العمل التربوي بالمدرسة.</strong></p><p style="direction: rtl;"><strong>وضع أيدي المسؤولين والمختصين في المكتب على واقع المشكلات التي تتعرض لها العملية التعليمية في المدرسة للعمل على إيجاد حلول لها عبر برامجه ومشروعاته</strong></p><p>&nbsp;</p><div>&nbsp;</div>' ,
          buttons: ['موافق']
        });
        alert.present();
            }

        if(item.cardid == 6)
        {

                this._db = firebase.database().ref('/pdf-list/pdf1/');/* .once('value').then(function(snapshot) {
                      yearsvisiblelocal = snapshot.val().visible;


                });*/
                this._db.once('value', this.handleFirebaseData, this);

        }

        if(item.cardid == 7)
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
  handleFirebaseData(snap)
  {
      let link = snap.val().link;
      window.open(link, '_system');

  }

}
