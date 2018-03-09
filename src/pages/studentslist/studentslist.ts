import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { AlertController } from 'ionic-angular';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import firebase from 'firebase';
/**
 * Generated class for the StudentslistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentslist',
  templateUrl: 'studentslist.html',
})
export class StudentslistPage {

studentslist_header: any;
year: any;
grade: any;
term: any;
studentslistFirebase: any;
grade_header: any;
termname: any;
settings_mode: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public alertCtrl: AlertController ) {

    this.settings_mode = this.navParams.get('param_settings_mode');
    //retrieve info from previous page
    this.term = this.navParams.get('param_term');
    this.termname = this.navParams.get('param_term_name');

    this.grade = this.navParams.get('param_grade');
    this.year = this.navParams.get('param_year');


    this.studentslist_header = ' عام ' +   this.navParams.get('param_year_string');
    this.grade_header = ' صف  ' + this.grade;

    this.studentslistFirebase = db.list('/beststudents/' + this.year + '/' + this.grade + '/' + this.term + '/' + 'studentlist',
    {
    query: {
      orderByChild: 'grade',
      startAt: parseInt('0')
    }
  });


  }

  studentclicked(item){
        let alert = this.alertCtrl.create({
    title: item.name,
    subTitle: 'نتيجة ' + item.grade + '</br> <img src="assets/img/hRfuSexSQluAjPxwEtgA_superior.png" style="display:block;width:65%;height:auto;margin-left:auto;margin-right:auto;" />',
    message:  'صف  ' + item.class + ',  المجموع ' + item.overallscore,
    buttons: ['موافق']
  });
  alert.present();
}
deletestudent(item){

  firebase.database().ref('/beststudents/' + this.year +'/' + this.grade +'/' + this.term +'/' + 'studentlist/' + item.$key).remove();

}
addstudent(){
  let alert = this.alertCtrl.create({
  title: 'إضافة طالب',
  inputs: [
    {
      name: 'Student Name',
      placeholder: 'اسم'
    },
    {
      name: 'Class',
      placeholder: 'صف '

    },
    {
      name: 'Score',
      placeholder: 'نتيجة'

    },
    {
      name: 'Overallscore',
      placeholder: 'نتيجة المجموع'

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
      text: 'إضافة',
      handler: data => {
        var studentname = data['Student Name'];
        var overallscore = data['Overallscore'];
        var studentgrade = data['Score'];
          var studentclass = data['Class'];
        firebase.database().ref('/beststudents/' + this.year +'/' + this.grade +'/' + this.term +'/' + 'studentlist').push({

            name: studentname,
            overallscore: overallscore,
            grade: Number(studentgrade),
            class: studentclass
          });

      }
    }
  ]
});
alert.present();

}
  ionViewDidLoad() {
    //console.log('ionViewDidLoad StudentslistPage');
  }

}
