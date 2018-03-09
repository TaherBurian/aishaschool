import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';

import { StudentslistPage } from '../studentslist/studentslist';



import { AlertController } from 'ionic-angular';
/**
 * Generated class for the YearsadminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yearsadmin',
  templateUrl: 'yearsadmin.html',
})
export class YearsadminPage {
  _selectedYear: any;
  _selectedGrade: any;
  termsFirebase: any;
  yearvisible: any;
  valuesChosen: boolean;
  grade_hidden: boolean;


  private _db: any;

  constructor(public navCtrl: NavController,  public alertCtrl: AlertController, public navParams: NavParams, public db: AngularFireDatabase) {

        this.valuesChosen = true;
        this.grade_hidden = true;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YearsadminPage');
  }

  onYearChange(selectedYear: any){
      console.log('Selected year: ', selectedYear);
      this._selectedYear = selectedYear;
      this.grade_hidden = false;


  }

  onGradeChange(selectedGrade: any){


      console.log('Selected grade: ', selectedGrade);
      this._selectedGrade = selectedGrade;
      this.termsFirebase = this.db.list('/beststudents/' + this._selectedYear + '/' + selectedGrade);

      this._db = firebase.database().ref('/beststudents/' + this._selectedYear);/* .once('value').then(function(snapshot) {
            yearsvisiblelocal = snapshot.val().visible;


      });*/
      this._db.once('value', this.handleFirebaseData, this);
      this.valuesChosen = false;
    }

    handleFirebaseData(snap)
    {
        this.yearvisible = snap.val().visible;

    }

    onYearCheckboxChange(){
        if(this.yearvisible)
        {
            let alert = this.alertCtrl.create({
              title: "Year Activated",
              subTitle: "This year is visible for all users now!!",
              buttons: ['موافق']
             });
             alert.present();
             firebase.database().ref('/beststudents/' + this._selectedYear ).update({

                 visible: true
               });



        }
        else{
          let alert = this.alertCtrl.create({
          title: "Year Deactivated",
          subTitle: "This year is NOT visible for all users now!!",
          buttons: ['موافق']
         });
         alert.present();
         firebase.database().ref('/beststudents/' + this._selectedYear ).update({

             visible: false
           });
        }

    }

  deleteterm(item){
    var refkey = item.$key;

    firebase.database().ref('/beststudents/' + this._selectedYear +'/' + this._selectedGrade +'/' + refkey  ).remove();

  }

showstudents(item){

  this.navCtrl.push(StudentslistPage, {
    param_term: item.$key,
    param_term_name: item.name,
    param_year: this._selectedYear,
    param_grade: this._selectedGrade,
    param_settings_mode: false,
    param_year_string: this.getYearString(this._selectedYear)
    });

}

//give the year as "year2" and return "2015-2016"
getYearString(firebaseYear){
  let yearString;
  //connect to firebase dependent of year
  switch(firebaseYear) {
        case 'year1':
              yearString = '2014-2015';
            break;
        case 'year2':
                  yearString = '2015-2016';
                break;
        case 'year3':
                      yearString = '2016-2017';
                    break;
        case 'year4':
                  yearString = '2017-2018';
                        break;
        case 'year5':
                  yearString = '2018-2019';
                            break;
        case 'year6':
                  yearString = '2019-2020';
                                break;
        case 'year7':
                  yearString = '2020-2021';
                                    break;
        default:
            ;
    }
  return yearString;
}
  addterm(){

    if(this._selectedYear == undefined || this._selectedGrade == undefined)
    {
       let alert = this.alertCtrl.create({
       title: "Please choose Year AND Grade first",

       buttons: ['موافق']
      });
      alert.present();
      return;
    }
    let alert = this.alertCtrl.create({
    title: 'إضافة الفصول الدراسية',
    inputs: [
      {
        name: 'Term Name',
        placeholder: 'اسم'
      },
      {
        name: 'Term interval',
        placeholder: 'فترة'

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
          var termname = data['Term Name'];
          var terminterval = data['Term interval'];
          firebase.database().ref('/beststudents/' + this._selectedYear +'/' + this._selectedGrade +'/' ).push({

              name: termname + ', ' + terminterval
            });

        }
      }
    ]
  });
  alert.present();
  }
}
