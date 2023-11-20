import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { NavController,AlertController, PopoverController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  bannerConfig: SwiperOptions;
  banners: any[] = [];
  store_types: any[] = [];
  loc = 'Locating...';

  constructor(
    private navCtrl: NavController,
    public popoverController: PopoverController,
  ) { }

  ngOnInit() {
    this.banners = [
      {banner: 'assets/imgs/banner1.png'},
      {banner: 'assets/imgs/banner2.png'},
      {banner: 'assets/imgs/banner3.png'},
      {banner: 'assets/imgs/banner4.png'},
    ];
    this.getCurrentLocation();
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      // slidesPerView: 1.2,
    };
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  goToFacility() {
    this.navCtrl.navigateForward('/tabs/facility');
  }

  goToHealthRecords() {
    this.navCtrl.navigateForward('/health-records');
  }

  goToNewsLetter() {
    this.navCtrl.navigateForward('/new-letters');
  }

  goToMedicine() {
    this.navCtrl.navigateForward('/medicine');
  }

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position: ', coordinates)
    } catch(e) {
      console.log(e);
      this.openPopover();
    }
  }

  openPopover() {
    const ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            left: 5
          };
        }
      }
    };
    this.presentPopover(ev);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'custom-popover',
      event: ev,
      translucent: true
    });
    await popover.present();
  
    const { data } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with data', data);
    if(data) {
      // this.requestGeolocationPermission();
    } else {
      this.loc = 'Sarawak';
    }
  }

  async requestGeolocationPermission() {
    try {
      const status = await Geolocation.requestPermissions();
      console.log(status);
      if(status?.location == 'granted') this.getCurrentLocation();
      else this.loc = 'Sarawak';
    } catch(e) {
      console.log(e);
    }
  }

}
