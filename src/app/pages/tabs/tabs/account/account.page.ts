import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  handlerMessage: any;
  roleMessage = '';

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
      },
    },
    {
      text: 'Confirm',
      role: 'confirm',
      handler: () => {
        this.handlerMessage = this.navCtrl.navigateForward('/intro');;
      },
    },
  ];

  setResult(ev) {
    this.roleMessage = `Dismissed with role: ${ev.detail.role}`;
  }

  goToEdit() {
    this.navCtrl.navigateForward('/edit-profile');
  }

}
