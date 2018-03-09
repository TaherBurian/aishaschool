import { Component, ViewChild  } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NavController, NavParams } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { BeststudentsPage } from '../pages/beststudents/beststudents';

import { TermsPage } from '../pages/terms/terms';
import { StudentslistPage } from '../pages/studentslist/studentslist';
import { AchievementsPage } from '../pages/achievements/achievements';
import { SchoolinfoPage } from '../pages/schoolinfo/schoolinfo';

import { SubachievsecurePage } from '../pages/subachievsecure/subachievsecure';
import { GuidancePage } from '../pages/guidance/guidance';
import { IframeschedulePage } from '../pages/iframeschedule/iframeschedule';

import { ContactusPage } from '../pages/contactus/contactus';
import { NewsadminPage } from '../pages/newsadmin/newsadmin';
import { NewsdeletePage } from '../pages/newsdelete/newsdelete';

import { HealthPage } from '../pages/health/health';

import { PdfadminPage } from '../pages/pdfadmin/pdfadmin';

import { MaplocationPage } from '../pages/maplocation/maplocation';
import { YearsadminPage } from '../pages/yearsadmin/yearsadmin';
import { EvacuationplanPage } from '../pages/evacuationplan/evacuationplan';
import { EvacplantargetsPage } from '../pages/evacplantargets/evacplantargets';
import { EvacplanelementsPage } from '../pages/evacplanelements/evacplanelements';
import { CenterssubPage } from '../pages/centerssub/centerssub';
import { ElearningPage } from '../pages/elearning/elearning';

import { AngularFireAuth } from 'angularfire2/auth';


import { AlertController } from 'ionic-angular';

import { MenuController } from 'ionic-angular';


import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = HomePage;
  @ViewChild('content') nav: NavController;

user: Observable<firebase.User>;
 public newsactive: boolean = false;


  constructor(platform: Platform,public menuCtrl: MenuController, public afAuth: AngularFireAuth, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController) {


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.



      statusBar.styleDefault();
      splashScreen.hide();
      platform.setDir('rtl', true);
      this.afAuth.auth.onAuthStateChanged(auth => {

            //user logged in
         if (auth) {
            this.newsactive = true;

           let alert = this.alertCtrl.create({
              title: "النجاح في تسجيل الدخول",
              subTitle: 'لقد سجلت دخولك بنجاح',
              message:   auth.email,
              buttons: ['موافق']
             });
             alert.present();
         } else {

          /*   this.newsactive = false;
            let alert = this.alertCtrl.create({
              title: "Login Info",
              subTitle: 'You are not logged in',
              message:  ' ',

             });
             alert.present();*/
         }
      });

    });
  }


//go to news admin page
newsadmin(){
this.menuCtrl.close();
  this.nav.push(NewsadminPage);

}

yearsadmin(){
this.menuCtrl.close();
  this.nav.push(YearsadminPage);

}

newsremove(){

  this.menuCtrl.close();
    this.nav.push(NewsdeletePage);
}

logoutclicked(){
firebase.auth().signOut();
let alert = this.alertCtrl.create({
   title: "Log out",
   subTitle: 'You logged out successfully!',
   message:  '',
   buttons: ['موافق']
  });
  alert.present();
this.newsactive = false;
}

pdfadmin(){

  this.menuCtrl.close();
    this.nav.push(PdfadminPage);

}


loginclicked(){

      let alert = this.alertCtrl.create({
        title: 'تسجيل الدخول',
        inputs: [
          {
            name: 'username',
            placeholder: 'البريد الإلكتروني',
          },
          {
            name: 'password',
            placeholder:  'كلمه السر',
            type: 'password'
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
            text: 'تسجيل الدخول',
            handler: data => {

              if (data.username, data.password) {
                firebase.auth().signInWithEmailAndPassword(data.username, data.password);

              /*  this.afAuth.auth.onAuthStateChanged(auth => {

                      //if logged in:
                         if (auth) {

                           let alert = this.alertCtrl.create({
                               title: "Login success",
                               subTitle: 'You logged in successfully!',
                               message:  'You are logged in as: ' + auth.email,

                              });
                              alert.present();

                         }
                          //log in failed
                         else {
                           let alert = this.alertCtrl.create({
                              title: "Login failed",
                              subTitle: 'You are not logged in',
                              message:  'Please check your email address or password.',
                              
                             });
                             alert.present();
                         }
                 });*/

              } else {
                // invalid login
                return false;
              }
            }
          }
        ]
      });
      alert.present();


  }
}
