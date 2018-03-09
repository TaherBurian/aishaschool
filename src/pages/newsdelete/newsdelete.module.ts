import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsdeletePage } from './newsdelete';

@NgModule({
  declarations: [
    NewsdeletePage,
  ],
  imports: [
    IonicPageModule.forChild(NewsdeletePage),
  ],
})
export class NewsdeletePageModule {}
