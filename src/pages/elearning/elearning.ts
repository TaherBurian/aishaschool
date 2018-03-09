import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ElearningPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elearning',
  templateUrl: 'elearning.html',
})
export class ElearningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElearningPage');
  }

  item1clicked()
  {
    let alert = this.alertCtrl.create({
          title: 'نظام إدارة التعلم',
          subTitle: 'ويشمل متابعة أداء الطالب وأجندة المعلم  و البريد الإلكتروني والمصادر التعليمية والواجبات والتقويمات المستمرة اضافة الى الدرس الاليكتروني هذا بالنسبة للمدرس أما بالنسبة للطالب فيشمل المصادر التعليمية والواجبات المدرسية والتقويمات المستمرة وملف التعريف والانجاز واجندة الطالب والبريد الاليكتروني اما بالنسبة لولي الامر فيشمل متابعة اداء الابناء والتواصل عبر الهاتف الجوال وتعزيز التواصل بين البيت والمدرسة',
          buttons: ['موافق']
          });
  alert.present();

  }

  item2clicked()
  {
    let alert = this.alertCtrl.create({
          title: 'نظام إدارة التعلم',
          subTitle: 'وتوفر المحتوى الالكتروني للعديد من الكتب والمجلات والدوريات العلمية والأدبية بعدة طرق منها المكتوب والمرئي والمسموعإضافة إلى تسجيل محتويات المكتبة المركزية ومكتبات المدارس مما يتيح تبادل المعلومات واستفادة المكتبات المدرسية والمركزية من محتويات كل منهم فضلا عن إصدار مؤشرات حول الحركة ونوعية القراءة مما يتيح لمتخذي القرار في المدارس تعزيز أهمية القراءة والبحث العلمي لدى الطلبة كما تساعد المكتبة الإلكترونية على توفير الاشتراك في المكتبات العالمية مما يتيح العديد من مصادر التعلم والتطوير للطلبة والمعلمين مع تتبع حركة الإعارة لمحتويات المكتبات.',
          buttons: ['موافق']
          });
  alert.present();

  }

  item3clicked()
  {
    let alert = this.alertCtrl.create({
          title: 'المحتوى الإلكتروني',
          subTitle: 'ويشمل محتويات باللغة العربية و الإنكليزية إضافة إلى محتويات ثنائية اللغة و محتويات ملائمة للمعايير القطرية يتم تصنيفها حسب المرحلة و حسب الصف و حسب المواد الدراسية و هي الإنكليزية و العلوم و العربية و العلوم الشرعية و الدراسات الاجتماعية',
            buttons: ['موافق']
          });
  alert.present();

  }

  item4clicked()
  {
    let alert = this.alertCtrl.create({
          title: 'التسجيل عبر شبكة الإنترنت',
          subTitle: '<h3 style="direction: rtl; text-align: center;">&nbsp;</h3><h3 class="MsoNormal" dir="RTL" style="line-height: 15.75pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-align: center;"><span lang="AR-SA" style="font-family: "Arial",sans-serif; color: #383838;">ويعتبر خطوة من الخطوات التي</span></h3><h3 class="MsoNormal" dir="RTL" style="line-height: 15.75pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-align: center;"><span lang="AR-SA" style="font-family: "Arial",sans-serif; color: #383838;"> سيتم</span><span class="apple-converted-space"><span dir="LTR" lang="EN-US" style="font-family: "Arial",sans-serif; color: #383838;">&nbsp;</span></span><span lang="AR-SA" style="font-family: "Arial",sans-serif; color: #383838;">اعتمادها في عملية تسجيل</span><span class="apple-converted-space"><span dir="LTR" lang="EN-US" style="font-family: "Arial",sans-serif; color: #383838;">&nbsp;</span></span><span lang="AR-SA" style="font-family: "Arial",sans-serif; color: #383838;">الطلبة</span></h3><h3 class="MsoNormal" dir="RTL" style="line-height: 15.75pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-align: center;"><span lang="AR-SA" style="font-family: "Arial",sans-serif; color: #383838;"> مما يسهل على أولياء الأمور والإدارة </span></h3><h3 class="MsoNormal" dir="RTL" style="line-height: 15.75pt; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; text-align: center;"><span lang="AR-SA" style="font-family: "Arial",sans-serif; color: #383838;">المدرسية ويوفر وقتهم وجهدهم</span><span dir="LTR" lang="EN-US" style="font-family: "Arial",sans-serif; color: #383838;">.</span></h3>',
          buttons: ['موافق']
          });
  alert.present();

  }

}
