import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AlertController } from 'ionic-angular';
import { EvacuationplanPage } from '../evacuationplan/evacuationplan';
import { EvacplanequipPage } from '../evacplanequip/evacplanequip';

/**
 * Generated class for the SubachievsecurePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subachievsecure',
  templateUrl: 'subachievsecure.html',
})
export class SubachievsecurePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubachievsecurePage');
  }

  card1clicked(){
    let alert = this.alertCtrl.create({
title: 'رؤية فريق الأمن والسلامة',
subTitle: 'تسعى لجنة الأمن والسلامة في مدرسة عائشة بنت أبي بكر الثانوية المستقلة للبنات إلى تحقيق أقصى درجات الأمن والسلامة بما يوفر بيئة آمنة لجميع منتسبي المدرسة للقيام بواجباتهم الموكلة إليهم ( التعليم – التعلم – البحث ) للارتقاء بالمدرسة والحصول على مراكز متقدمة في الأمن والسلامة بين المدارس في قطر',
message: '',
buttons: ['موافق']
});
alert.present();

  }

  evacuationplan_clicked(){

    this.navCtrl.push(EvacuationplanPage, {
      });
  }
  evacplanequipclicked(){
      this.navCtrl.push(EvacplanequipPage, {  });
    }
}
