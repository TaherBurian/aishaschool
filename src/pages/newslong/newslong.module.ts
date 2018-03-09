import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewslongPage } from './newslong';

@NgModule({
  declarations: [
    NewslongPage,
  ],
  imports: [
    IonicPageModule.forChild(NewslongPage),
  ],
})
export class NewslongPageModule {}
