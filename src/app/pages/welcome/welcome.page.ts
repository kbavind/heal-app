import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { INTRO_KEY, StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private navCtrl: NavController, 
    private router: Router,
    private storage: StorageService) { }

  ngOnInit() {
  }

  async goToSignIn() {
    // this.navCtrl.navigateForward('/sign-in');
    await this.storage.setStorage(INTRO_KEY, 'true');
    this.router.navigateByUrl('/auth-screen', { replaceUrl: true});
  }

}
