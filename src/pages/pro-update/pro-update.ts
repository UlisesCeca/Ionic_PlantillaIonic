import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ProUpdateProvider } from '../../providers/pro-update/pro-update'

@IonicPage()
@Component({
  selector: 'page-pro-update',
  templateUrl: 'pro-update.html',
})
export class ProUpdatePage {

  constructor(public pro: ProUpdateProvider) {}

}
