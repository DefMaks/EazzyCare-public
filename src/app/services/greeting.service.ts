import { Injectable } from '@angular/core';
import { AppGlobals } from './app.global';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(
    public appGlobal: AppGlobals
  ) {
    this.checkTimeOfDay()
    this.login()
  }

  checkTimeOfDay(): string|undefined {
    var currentTime = new Date().getHours();
    let greetings:string = '';

    if (currentTime >= 3 && currentTime < 12) {
      greetings = 'Bonjour,';
    } else if (currentTime >= 12 && currentTime < 18) {
      greetings = 'Bon après-midi,';
    } else if (currentTime >= 18 || currentTime < 3) {
      greetings = 'Bonsoir,';
    }
    // console.log(greetings)
    return greetings;
  }

  login(): string|undefined {
    var currentTime = new Date().getHours();
    let greetings:string = '';

    if (currentTime >= 3 && currentTime < 12) {
      greetings = 'Bonjour !';
    } else if (currentTime >= 12 && currentTime < 18) {
      greetings = 'Bon après-midi !';
    } else if (currentTime >= 18 || currentTime < 3) {
      greetings = 'Bonsoir !';
    }
    // console.log(greetings)
    this.appGlobal.greetings = greetings;
    return this.appGlobal?.greetings;
  }
}
