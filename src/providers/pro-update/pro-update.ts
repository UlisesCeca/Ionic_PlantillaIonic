import { Injectable } from '@angular/core';
import { Pro } from '@ionic/pro';
import { App } from "ionic-angular";
import { PAGES } from '../../pages/pages';


@Injectable()
export class ProUpdateProvider {
  public message: string
  public progress: number;

  public constructor(private app: App,
                    private pro: Pro) {
    this.progress = 0;
  }

  public async update(): Promise<any> {
    let nav = this.app.getActiveNav();
    const update = await Pro.deploy.checkForUpdate();

    if(update.available) {
      nav.insert(0, PAGES.UPDATE);
      this.message = "Actualizando aplicación";
      await Pro.deploy.downloadUpdate((progress) => {
        this.progress = progress;
      });
      this.progress = 0;
      this.message = "Aplicando actualización";
      await Pro.deploy.extractUpdate((progress) => {
        this.progress = progress;
      })
      this.progress = 0;
      this.message = "Actualizando..."
      await Pro.deploy.reloadApp();
    } else {
      nav.insert(0, PAGES.HOME);
    }
    console.log(await this.getConfiguration());
  }

  public async getConfiguration(): Promise<ICurrentConfig> {
    return Pro.deploy.getConfiguration();
  }


}
