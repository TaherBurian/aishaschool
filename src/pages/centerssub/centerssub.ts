import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CenterssubPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-centerssub',
  templateUrl: 'centerssub.html',
})
export class CenterssubPage {
c1: boolean = true;
c2: boolean = true;
c3: boolean = true;
c4: boolean = true;
c5: boolean = true;

c6: boolean = true;
c7: boolean = true;



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.c1 = this.navParams.get('param_c1');
    this.c2 = this.navParams.get('param_c2');
    this.c3 = this.navParams.get('param_c3');
    this.c4 = this.navParams.get('param_c4');
    this.c5 = this.navParams.get('param_c5');
      this.c6 = this.navParams.get('param_c6');
        this.c7 = this.navParams.get('param_c7');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CenterssubPage');
  }

}
