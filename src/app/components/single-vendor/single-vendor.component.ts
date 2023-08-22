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
// import 'keen-slider/keen-slider.min.css'
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-single-vendor',
  templateUrl: './single-vendor.component.html',
  styleUrls: ['./single-vendor.component.scss',"../../../../node_modules/keen-slider/keen-slider.min.css",
],
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
  @ViewChild("sliderRef")
  sliderRef!: ElementRef<HTMLElement>;
  slider!: KeenSliderInstance

  colors = ['junglegreen', 'verdigris', 'caribbean', 'teal'];

  packages = [
    {
      name: 'Kimya',
      description: 'Ce package est idéal pour une personne',
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
      description: 'Ce prestataire offre un package de services à faire sentir insouciant',
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
      description: 'Ne vous souciez plus de rien car ce package ne fera que votre bonheur',
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
    // console.log(this.singleVendor)
    // console.log(this.singleVendor?.offers)
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement,{
        initial: 1,
        slides: {
          origin: "center",
          perView: 1.5,
          spacing: 15,
        },
      })
    }, 600);
  }

  ionWillEnter() {
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
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

  ngAfterViewInit() {}

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
