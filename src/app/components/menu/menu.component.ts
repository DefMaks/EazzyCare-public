import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  NO_ERRORS_SCHEMA,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { IonicModule, PopoverController } from '@ionic/angular';
import { AppGlobals } from 'src/app/services/app.global';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class MenuComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  constructor(
    public appGlobal: AppGlobals,
    private popover: PopoverController,
    private route: Router
  ) {}

  ngOnInit() {}

  async closeMenu(url:string,ev: Event) {
    this.route.navigateByUrl(url)
    await this.popover.dismiss();
  }
}
