import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NewsPage } from '../news/news';
import { NewsadminPage } from '../newsadmin/newsadmin';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { BeststudentsPage } from '../beststudents/beststudents';
import { AchievementsPage } from '../achievements/achievements';
import { GuidancePage } from '../guidance/guidance';
import { SchoolinfoPage } from '../schoolinfo/schoolinfo';

import { ContactusPage } from '../contactus/contactus';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//items: FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    // this.items = db.list('/news/');


  }
  openinstagram(){

    window.open('https://www.instagram.com/ayshaschool', '_system');
  }
  opentwitter(){

    window.open('https://twitter.com/aysha_school', '_system');
  }
  openfacebook(){

    window.open('https://www.facebook.com/ayshaa.school', '_system');
  }
  schoolinfoclicked(){

        this.navCtrl.push(SchoolinfoPage, {

    });
  }
  newsclick(){

        this.navCtrl.push(NewsPage, {

    });
  }

  studentsclick(){

        this.navCtrl.push(BeststudentsPage, {

    });
  }

  achievementsclick(){
    this.navCtrl.push(AchievementsPage, {

    });
  }
  guidanceclicked(){
    this.navCtrl.push(GuidancePage, {

    });
  }

  contactusclicked(){
    this.navCtrl.push(ContactusPage, {

    });
  }

}
