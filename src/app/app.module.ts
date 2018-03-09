import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NavController, NavParams } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDataProvider } from '../providers/firebase-data/firebase-data';
import { MyfirebaseDataProvider } from '../providers/myfirebase-data/myfirebase-data';
import { NewslongPage } from '../pages/newslong/newslong';
import { BeststudentsPage } from '../pages/beststudents/beststudents';
import { StudentslistPage } from '../pages/studentslist/studentslist';
import { GuidancePage } from '../pages/guidance/guidance';
import { ElearningPage } from '../pages/elearning/elearning';

import { EvacuationplanPage } from '../pages/evacuationplan/evacuationplan';
import { IframeschedulePage } from '../pages/iframeschedule/iframeschedule';
import { SchoolinfoPage } from '../pages/schoolinfo/schoolinfo';
import { ContactusPage } from '../pages/contactus/contactus';

import { MaplocationPage } from '../pages/maplocation/maplocation';
import { EvacplantargetsPage } from '../pages/evacplantargets/evacplantargets';
import { EvacplanelementsPage } from '../pages/evacplanelements/evacplanelements';
import { EvacplanequipPage } from '../pages/evacplanequip/evacplanequip';
import { CentersPage } from '../pages/centers/centers';

import { HealthPage } from '../pages/health/health';

import { CenterssubPage } from '../pages/centerssub/centerssub';

import { PdfadminPage } from '../pages/pdfadmin/pdfadmin';


import { NewsadminPage } from '../pages/newsadmin/newsadmin';
import { YearsadminPage } from '../pages/yearsadmin/yearsadmin';

import { NewsdeletePage } from '../pages/newsdelete/newsdelete';

import { TermsPage } from '../pages/terms/terms';
import { AchievementsPage } from '../pages/achievements/achievements';
import { SubachievsecurePage } from '../pages/subachievsecure/subachievsecure';
import { Camera } from '@ionic-native/camera';
import { AngularFireAuth } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyABCcdSumtdvYMXLDN3X05ZPv9r8s_rnC8",
    authDomain: "aisha-school.firebaseapp.com",
    databaseURL: "https://aisha-school.firebaseio.com",
    projectId: "aisha-school",
    storageBucket: "aisha-school.appspot.com",
    messagingSenderId: "290881235900"
};
@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    BeststudentsPage,
      NewslongPage,
      StudentslistPage,
      ContactusPage,
      TermsPage,
      HealthPage,
      PdfadminPage,
      GuidancePage,
      SubachievsecurePage,
      IframeschedulePage,
      CentersPage,
      ElearningPage,
      SchoolinfoPage,
      MaplocationPage,
      AchievementsPage,
      EvacplanequipPage,
      NewsadminPage,
      CenterssubPage,
      YearsadminPage,
      EvacuationplanPage,
      EvacplantargetsPage,
      NewsdeletePage,
      EvacplanelementsPage,
    HomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
    menuType: 'push',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }
  }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    BeststudentsPage,
    NewslongPage,
    PdfadminPage,
    StudentslistPage,
    HealthPage,
    ElearningPage,
    TermsPage,
    CentersPage,
    CenterssubPage,
    EvacplanequipPage,
    GuidancePage,
    ContactusPage,
    IframeschedulePage,
    SchoolinfoPage,
    MaplocationPage,
    SubachievsecurePage,
    AchievementsPage,
    EvacplantargetsPage,
    NewsadminPage,
    EvacuationplanPage,
    NewsdeletePage,
    YearsadminPage,
    EvacplanelementsPage,
    HomePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDataProvider,
    Camera,
    AngularFireAuth,
    MyfirebaseDataProvider
  ]
})
export class AppModule {}
