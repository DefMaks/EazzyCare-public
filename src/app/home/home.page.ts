import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  constructor() {}


  openMenu(){
    
  }

}
