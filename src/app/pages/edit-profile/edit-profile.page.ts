import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  form: FormGroup;
  handlerMessage: any;
  roleMessage = '';
  type = true;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]})
    });
  }

  changeType() {
    this.type = !this.type;
  }

  async updateDetails() {
    const alert = await this.alertController.create({
      header: 'New Login Credentials',
      // subHeader: 'Important message',
      message: 'Credentials will be updated',
      buttons: ['OK'],
    });

    await alert.present();
  }

  backToAccount() {
    this.navCtrl.navigateForward('/tabs/account');
  }



}
