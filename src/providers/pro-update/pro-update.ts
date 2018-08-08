import { Injectable } from '@angular/core';
import { Pro } from '../../../node_modules/@ionic/pro';
import { App } from "ionic-angular";
import { PAGES } from '../../pages/pages';


@Injectable()
export class ProUpdateProvider {
  public message: string

  public constructor(private app: App) {}

  public async update(): Promise<any> {
    let nav = this.app.getActiveNav();
    const update = await Pro.deploy.checkForUpdate();

    if(update.available) {
      nav.setRoot(PAGES.UPDATE);
      this.message = "Actualizando aplicación...";
      await Pro.deploy.downloadUpdate((progress) => {
        this.message = "Actualizando aplicaciónn: " + progress + "%...";
        console.log("Descargando actualización: " + progress);
      })
      this.message = "Aplicando actualización...";
      await Pro.deploy.extractUpdate((progress) => {
        this.message = "Aplicando actualización: " + progress + "%...";
        console.log("Aplicando actualización..." + progress);
      })
      await Pro.deploy.reloadApp();
    } else {
      nav.setRoot(PAGES.HOME);
    }
  }


}
