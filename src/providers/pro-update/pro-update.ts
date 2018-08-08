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
    const info = await Pro.deploy.getConfiguration()
    console.log(info)
  }


}
