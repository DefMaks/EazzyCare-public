import { Component, OnInit } from '@angular/core';
import { AppGlobals } from 'src/app/services/app.global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(
    public appGlobal: AppGlobals
  ) { }

  ngOnInit() {}


}
