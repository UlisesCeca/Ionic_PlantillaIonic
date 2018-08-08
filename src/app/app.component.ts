import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProUpdateProvider } from '../providers/pro-update/pro-update'
import { PAGES } from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  constructor(private platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private pro: ProUpdateProvider
            ) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.setRootPage();

      /* Depending on Ionic's Pro update's method, we use our custom update method or not
      Also this only happens if we are on a device */
      if(this.platform.is('mobileweb') || this.platform.is('core')) {
        this.setRootPage();
      } else {
        this.pro.getConfiguration()
        .then(proInfo => {
          if(proInfo.updateMethod == "none") {
            this.pro.update();
          } else {
            this.setRootPage();
          }
        });
      }
      /* End of Ionic's Pro Update */
      
    });
  }

  private setRootPage(): void {
    this.nav.insert(0, PAGES.HOME)
  }
  
}

