import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeststudentsPage } from './beststudents';

@NgModule({
  declarations: [
    BeststudentsPage,
  ],
  imports: [
    IonicPageModule.forChild(BeststudentsPage),
  ],
})
export class BeststudentsPageModule {}
