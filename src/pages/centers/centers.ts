import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CenterssubPage } from '../../pages/centerssub/centerssub';

/**
 * Generated class for the CentersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-centers',
  templateUrl: 'centers.html',
})
export class CentersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CentersPage');
  }

  item1clicked(){

    this.navCtrl.push(CenterssubPage, {
      param_c1: false,
        param_c2: true,
        param_c3: true,
        param_c4: true,
        param_c5: true,
          param_c6: true,
          param_c7: true,
    });
  }
  item2clicked(){

    this.navCtrl.push(CenterssubPage, {
      param_c1: true,
      param_c2: false,
      param_c3: true,
      param_c4: true,
      param_c5: true,
        param_c6: true,
        param_c7: true,
    });
  }

  item3clicked(){

    this.navCtrl.push(CenterssubPage, {
      param_c1: true,
      param_c2: true,
      param_c3: false,
      param_c4: true,
      param_c5: true,
        param_c6: true,
        param_c7: true,
    });
  }

  item4clicked(){

    this.navCtrl.push(CenterssubPage, {
      param_c1: true,
      param_c2: true,
      param_c3: true,
      param_c4: false,
      param_c5: true,
        param_c6: true,
        param_c7: true,
    });
  }

  item5clicked(){

    this.navCtrl.push(CenterssubPage, {
      param_c1: true,
      param_c2: true,
      param_c3: true,
      param_c4: true,
        param_c5: false,
          param_c6: true,
          param_c7: true,
    });
  }

  item6clicked(){

    this.navCtrl.push(CenterssubPage, {
      param_c1: true,
      param_c2: true,
      param_c3: true,
      param_c4: true,
      param_c5: true,
        param_c6: false,
          param_c7: true,
    });
  }

  item7clicked(){

    this.navCtrl.push(CenterssubPage, {
      param_c1: true,
      param_c2: true,
      param_c3: true,
      param_c4: true,
      param_c5: true,
        param_c6: true,
          param_c7: false,
    });
  }

}
