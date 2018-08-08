import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProUpdateProvider } from '../../providers/pro-update/pro-update'

@IonicPage()
@Component({
  selector: 'page-pro-update',
  templateUrl: 'pro-update.html',
})
export class ProUpdatePage {

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              public pro: ProUpdateProvider
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProUpdatePage');
  }

}
