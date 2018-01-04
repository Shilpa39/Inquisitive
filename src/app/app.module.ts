import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {PostComponent} from '../pages/components/post.component';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MemePage } from '../pages/meme/meme';
import { QuotePage } from '../pages/quote/quote';

import {FactsService} from '../services/facts.service';
import {MemesService} from '../services/memes.service';
import {QuotesService} from '../services/quotes.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PostComponent,
    MemePage,
    QuotePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MemePage,
    QuotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    FactsService,
    MemesService,
    QuotesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
