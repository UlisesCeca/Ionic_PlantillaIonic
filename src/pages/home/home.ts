import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pro } from '@ionic/pro';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public constructor(private navCtrl: NavController) {
    Pro.deploy.getConfiguration().then(info => console.log(info))
  }
}
