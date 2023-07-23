import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppGlobals } from '../services/app.global';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from '../components/menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  logo = environment.appLogo

  moods = [
    {
      mood: 'nerveux',
      icon: 'assets/emojis/angry.svg',
      color: 'red'
    },
    {
      mood: 'triste',
      icon: 'assets/emojis/sad.svg',
      color: 'orange'
    },
    {
      mood: 'neutre',
      icon: 'assets/emojis/neutral.svg',
      color: 'caribbean'
    },
    {
      mood: 'zen',
      icon: 'assets/emojis/happy.svg',
      color: 'junglegreen'
    },
    {
      mood: '(Très) heureux',
      icon: 'assets/emojis/so-happy.svg',
      color: 'yellowgreen'
    },
  ]

  roleMsg!: string;

  constructor(
    public appGlobal: AppGlobals,
    private popover: PopoverController
  ) {}


  async openMenu(e: Event) {
    const popover = await this.popover.create({
      component: MenuComponent,
      event: e,
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    this.roleMsg = `Popover dismissed with role: ${role}`;
  }

  async closeMenu(ev: Event){
      await this.popover.dismiss();
  }

}
