import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  NO_ERRORS_SCHEMA,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

// import { register } from 'swiper/element';
// import Swiper  from 'swiper';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';
// register();

@Component({
  selector: 'app-single-vendor',
  templateUrl: './single-vendor.component.html',
  styleUrls: ['./single-vendor.component.scss'],
  standalone: true,
  // encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, FormsModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SingleVendorComponent implements OnInit {
  @Input() appGlobal!: any;
  @Input() singleVendor!: any;

  @ViewChild('swipepackages') swiperRef: ElementRef | undefined;
  // intro?: Swiper;

  colors = ['junglegreen', 'verdigris', 'caribbean', 'teal'];

  packages = [
    {
      name: 'Kimya',
      color: '',
      services: [
        {
          name: '',
        },
      ],
      prix: '20$',
      period: 'mois',
    },
    {
      name: 'Pepele',
      color: '',
      services: [
        {
          name: '',
        },
      ],
      prix: '30$',
      period: 'mois',
    },
    {
      name: 'Bomengo',
      color: '',
      services: [
        {
          name: '',
        },
      ],
      prix: '50$',
      period: 'mois',
    },
  ];

  roleMsg = '';

  constructor(private popover: PopoverController) {}

  ngOnInit() {

  }

  async openMenu(e: Event) {
    const popover = await this.popover.create({
      component: MenuComponent,
      event: e,
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    this.roleMsg = `Popover dismissed with role: ${role}`;
  }

  async closeMenu(ev: Event) {
    await this.popover.dismiss();
  }

  async writeMessage() {
    const url = 'https://wa.me/243974156086';

    return await window.open(url, '_blank');
  }

  async call() {
    const url = 'tel:+243974156086';

    return await window.open(url, '_blank');
  }

  ngAfterViewInit() {
  }

  swiperSlideChange($event: any) {
    // throw new Error('Method not implemented.');
    // this.intro?.autoplay;
    /*
    console.log(this.intro?.activeIndex);
    if (this.intro?.activeIndex != undefined && this.intro?.activeIndex > 0) {
      // this.displayNext = true;
    } else {
      // this.displayNext = false;
    }
    */
  }
  /*
  swiperReady() {
    // this.intro = this.swiperRef?.nativeElement.swiper;
    // this.intro = new Swiper(this.swiperRef?.nativeElement, {
    const intro = new Swiper(this.swiperRef?.nativeElement, {
      slidesPerView: 3,
      initialSlide: 2, // set the initial active slide to the third slide
      speed: 600,
      spaceBetween: 0,
    });
  }*/
}
