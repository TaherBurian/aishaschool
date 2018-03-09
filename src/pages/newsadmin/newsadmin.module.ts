import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsadminPage } from './newsadmin';

@NgModule({
  declarations: [
    NewsadminPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsadminPage),
  ],
})
export class NewsadminPageModule {}
