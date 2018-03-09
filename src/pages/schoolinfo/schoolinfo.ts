import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the SchoolinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schoolinfo',
  templateUrl: 'schoolinfo.html',
})
export class SchoolinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
  }
schoolinfoclicked(){
  let alert = this.alertCtrl.create({
title:'<h2 style="text-align: right !important"> الرؤية والرسالة </h2>',
subTitle: '<img src="assets/img/target.png"/>',
message: '<p style= "text-align: center;">طالباتنا قادرات على التخطيط لمستقبلهن.     واعيات بقدراتهن و ميولهن و مهاراتهن.  واثقات من أنفسهن ، مستقلات، ذوات أفق متسع.      يدركن ما يمكن أن يقدمن و يجدن اختيار البدائل.        ذوات قدرة انتقائية عالية وفق تفكير مدروس.     يواكبن تطلعات مجتمعهن. </p>' +
'<h2> رسالتنا</h2>' +
'<p style= "text-align: center;">طرق التدريس:منوعة، حديثة، تعامل المتعلمات بودية، تراعي الفروق الفردية كاستخدام أسلوب التعليم المفرد(الرزم التعليمية) </p>'
+ '<p>المناهج:متوازنة،شاملة،تتضمن استراتيجيات تنمي مهارات التفكير والإبداع وتساعد المتعلمة نحو تخطيط مستقبلها.</p>' +
'<p>المعلمات و الموظفات:سنجند أنفسنا لدعم المعلمات و الموظفات بحيث يكن واعيات ومدركات لمتطلبات المدرسة وواجباتهن نحو المتعلمات وملتزمات بتطورهن المهني ليقدمن أفضل ما يمكن</p>' +
'<p>إشراك المجتمع: سنعمل بجد للتواصل مع أولياء الأمور والمجتمع بهدف كسب دعمهم و الوصول بهم إلى المبادرة بإشراك أنفسهم في فعاليات المدرسة</p>' +
'<p>بيئة التعلم:بيئة تعليمية مساندة، محفزة، مريحة، ممتعة، يتوازن فيها المرح والجد</p>',
buttons: ['موافق']
});
alert.present();
}

managementboardclicked(){
  let actionSheet = this.actionSheetCtrl.create({
    title: 'الهيئة الادارية',
    buttons: [
      {
        text: 'مديرة المدرسة وصاحبة الترخيص , حمده المالكي',
        role: 'destructive',
        icon: 'person',
        handler: () => {

          let alert = this.alertCtrl.create({
      title: '<img src="assets/img/hamda-elmalky.png" style="display:block;width:65%;height:auto;margin-left:auto;margin-right:auto;" />',
      subTitle: 'مديرة المدرسة وصاحبة الترخيص',
      message:  '',
      buttons: ['موافق']
    });
    alert.present();

        }
      },{
        text: ' النائبة الادارية, عائشه المهندي',
        icon: 'person',
        handler: () => {
          let alert = this.alertCtrl.create({
      title: '<img src="assets/img/a2esha-elmohandy.png" style="display:block;width:65%;height:auto;margin-left:auto;margin-right:auto;" />',
      subTitle:'النائبة الادارية',
      message:  '',
      buttons: ['موافق']
    });
    alert.present();
        }
      },
      {
        text: 'معجبة المري , النائبة الأكاديمية ',
        icon: 'person',
        handler: () => {
          let alert = this.alertCtrl.create({
          title: '<img src="assets/img/mo3gaba-elmory.png" style="display:block;width:65%;height:auto;margin-left:auto;margin-right:auto;" />',
          subTitle:'النائبة الأكاديمية',
          message:  '',
          buttons: ['موافق']
          });
          alert.present();
        }
      },
      {
          text: 'نايلة الجاسم , المرشدة الطلابية',
          icon: 'person',
          handler: () => {
            let alert = this.alertCtrl.create({
            title: '<img src="assets/img/Nayla-elGasem.png" style="display:block;width:65%;height:auto;margin-left:auto;margin-right:auto;" />',
            subTitle:'المرشدة الطلابية',
            message:  '',
            buttons: ['موافق']
            });
            alert.present();
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolinfoPage');
  }

}
