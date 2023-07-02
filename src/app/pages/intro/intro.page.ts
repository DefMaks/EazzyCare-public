import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { register } from 'swiper/element';
import Swiper from 'swiper';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
register();

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IntroPage implements OnInit {
  @ViewChild('intro') swiperRef: ElementRef | undefined;
  intro?: Swiper;

  logo = environment.appLogo;
  displayNext = false;

  introMessages = [
    {
      image: 'assets/intro-img/adcovers.jpg',
      message: 'Bienvenue sur EazzyCare',
    },
    {
      image: 'assets/intro-img/iStock-1159419303.jpg',
      message: 'Retrouvez les prestataires de santé <br> sur EazzyCare',
    },
    {
      image: 'assets/intro-img/covered.jpeg',
      message: 'Restez couverts en souscrivant aux meilleurs packages Santé',
    },
  ];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  swiperSlideChange($event: any) {
    // throw new Error('Method not implemented.');
    this.intro = this.swiperRef?.nativeElement.swiper;
    // this.intro?.autoplay;
    console.log(this.intro?.activeIndex);
    if (this.intro?.activeIndex != undefined && this.intro?.activeIndex > 0) {
      this.displayNext = true;
    }
    else{
      this.displayNext = false;
    }
  }
  swiperReady() {}

  skip(){
    this.router.navigateByUrl("/login")
  }

  
}
