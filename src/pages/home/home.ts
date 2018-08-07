import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalendarComponentOptions } from "ulises-ionic-calendar-temp";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dateRange: { from: string; to: string; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };
  constructor(public navCtrl: NavController) {

  }

}
