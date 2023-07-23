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
import { Routes } from '@angular/router';
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
    private popover: PopoverController
  ) {}

  ngOnInit() {}

  async closeMenu(ev: Event) {
    await this.popover.dismiss();
  }
}
