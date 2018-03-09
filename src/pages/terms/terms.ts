import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StudentslistPage } from '../studentslist/studentslist';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the TermsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {
termsFirebase: any;
year_string: any;

//the string how used in firebase node
year_firebase: any;
grade_string: any;
termsheader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public db: AngularFireDatabase) {

    //retrieve info from previous page
    this.year_string = this.navParams.get('paramyear');
    this.grade_string = this.navParams.get('paramgrade');

    //show header in page
  this.termsheader = this.year_string + ', ' + this.grade_string;


    //connect to firebase dependent of year
    switch(this.year_string) {
          case '2014-2015':
                this.termsFirebase = db.list('/beststudents/year1/' + this.grade_string);
                this.year_firebase = 'year1';
              break;
          case '2015-2016':
              this.termsFirebase = db.list('/beststudents/year2/'+ this.grade_string);
              this.year_firebase = 'year2';
              break;
          case '2016-2017':
              this.termsFirebase = db.list('/beststudents/year3/' + this.grade_string);
              this.year_firebase = 'year3';
                  break;
          case '2017-2018':
                      this.termsFirebase = db.list('/beststudents/year4/' + this.grade_string);
                      this.year_firebase = 'year4';
                          break;
          case '2018-2019':
                      this.termsFirebase = db.list('/beststudents/year5/' + this.grade_string);
                      this.year_firebase = 'year5';
                                  break;
          case '2019-2020':
                      this.termsFirebase = db.list('/beststudents/year6/' + this.grade_string);
                      this.year_firebase = 'year6';
                        break;
          case '2020-2021':
                      this.termsFirebase = db.list('/beststudents/year7/' + this.grade_string);
                      this.year_firebase = 'year7';
                        break;
          default:
              ;
      }
  }

termsitemclicked(termclicked)
{
  console.log(termclicked.$key);
  this.navCtrl.push(StudentslistPage, {
        param_term: termclicked.$key,
        param_term_name: termclicked.name,
        param_year: this.year_firebase,
        param_grade: this.grade_string,
        param_settings_mode: true,
        param_year_string: this.year_string

    });
}

  ionViewDidLoad() {
    //console.log(this.navParams.get('paramyear'));
    //console.log(this.navParams.get('paramgrade'));
  }

}
