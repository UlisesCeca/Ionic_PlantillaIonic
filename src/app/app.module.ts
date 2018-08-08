import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule , Injectable, Injector } from '@angular/core';
import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Pro } from '@ionic/pro';

import { CalendarModule } from "ulises-ionic-calendar-temp";

import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ulises-ionic-native-http-connection-backend-temp';

import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ulises-ionic-angular-swipper-temp';
import { ProUpdateProvider } from '../providers/pro-update/pro-update';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

/* Inicio del codigo para Ionic Pro */

Pro.init('01AA233E', {
  appVersion: '0.0.1'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

/* Fin del codigo para Ionic Pro */

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
    NativeHttpModule,
    SwiperModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
    {provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG},
    ProUpdateProvider
  ]
})
export class AppModule {}
