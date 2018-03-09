import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdfadminPage } from './pdfadmin';

@NgModule({
  declarations: [
    PdfadminPage,
  ],
  imports: [
    IonicPageModule.forChild(PdfadminPage),
  ],
})
export class PdfadminPageModule {}
