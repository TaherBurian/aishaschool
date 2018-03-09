import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentslistPage } from './studentslist';

@NgModule({
  declarations: [
    StudentslistPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentslistPage),
  ],
})
export class StudentslistPageModule {}
