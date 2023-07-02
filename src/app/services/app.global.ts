import { Injectable } from '@angular/core';

export interface AirtableResponse {
  id: string;
  fields: any;
}

@Injectable()
export class AppGlobals {
  public greetings = ''
  vendors: any = []
  insure: any = [] // Assureures
  cm: any = [] //Centre de santé
  offers: any = []
  subscriptions: any = []
  healthServices: any = []
  mySession: any = null
  displaySide: boolean
  | undefined
  typeVendor: any = [];
  // allUsers: any = null;
  // allUsers: any = null;
}
