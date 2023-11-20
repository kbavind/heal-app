import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MedicineService } from 'src/app/services/medicine/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.page.html',
  styleUrls: ['./medicine.page.scss'],
})
export class MedicinePage implements OnInit {
  searchTerm: string;
  searchResults: any[] = [];

  constructor(
    private medicineService: MedicineService,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  backToHome() {
    this.navCtrl.navigateForward('/tabs/home');
  }

  searchMedicine() {
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      this.medicineService.search(this.searchTerm).subscribe(
        (data: any) => {
          if (data.drugGroup && data.drugGroup.conceptGroup) {
            const drugs = data.drugGroup.conceptGroup[0].concept;
            this.searchResults = drugs;
          } else {
            this.searchResults = [];
          }
        },
        (error) => {
          console.log('Error occurred while searching for medicine:', error);
        }
      );
    } else {
      this.searchResults = [];
    }
  }

}
