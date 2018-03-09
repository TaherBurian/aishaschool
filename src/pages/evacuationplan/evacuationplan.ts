import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvacplantargetsPage } from '../evacplantargets/evacplantargets';
import { EvacplanequipPage } from '../evacplanequip/evacplanequip';
import { EvacplanelementsPage } from '../evacplanelements/evacplanelements';

/**
 * Generated class for the EvacuationplanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evacuationplan',
  templateUrl: 'evacuationplan.html',
})
export class EvacuationplanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvacuationplanPage');
  }

  evacplantargetsclicked(){


        this.navCtrl.push(EvacplantargetsPage, {  });
  }
  evacplanelementsclicked(){

    this.navCtrl.push(EvacplanelementsPage, {  });
  }
  evacplanequipclicked(){

    this.navCtrl.push(EvacplanequipPage, {  });
  }

}
