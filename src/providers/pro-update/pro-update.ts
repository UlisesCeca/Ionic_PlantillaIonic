import { Injectable } from '@angular/core';
import { Pro } from '../../../node_modules/@ionic/pro';

@Injectable()
export class ProUpdateProvider {
  public message: string

  public constructor() {}

  async update() {
    const update = await Pro.deploy.checkForUpdate()
    if (update.available){
      this.message = "Actualizacidon aplicación...";
      await Pro.deploy.downloadUpdate((progress) => {
        console.log("Descargando actualización: " + progress);
      })
      this.message = "Aplicando actualización...";
      await Pro.deploy.extractUpdate((progress) => {
        console.log("Aplicando actualización..." + progress);
      })
      await Pro.deploy.reloadApp();
    }
  }

}
