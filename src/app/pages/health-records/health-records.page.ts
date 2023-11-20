import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-health-records',
  templateUrl: './health-records.page.html',
  styleUrls: ['./health-records.page.scss'],
})
export class HealthRecordsPage implements OnInit {

  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;
  stepsCount: number;
  distanceTravelled: number;
  stepCount: number = 0;
  stepCounter: any;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      let finalBmi = this.weight / (this.height / 100 * this.height / 100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
  }
  
  // setBMIMessage will set the text message based on the value of BMI
  private setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = "Underweight"
    }
  
    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = "Normal"
    }
  
    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = "Overweight"
    }
  
    if (this.bmiValue > 30) {
      this.bmiMessage = "Obese"
    }
  }

  backToHome() {
    this.navCtrl.navigateForward('/tabs/home');
  }

  startStepCountTracking() {  
    this.stepCounter.start()
      .then(() => {
        this.stepCounter.getStepCount()
          .then(count => {
            this.stepCount = count;
          })
          .catch(error => {
            console.log('Error getting step count:', error);
          });
      })
      .catch(error => {
        console.log('Error starting step count tracking:', error);
      });
  }

  stopStepCountTracking() {
    this.stepCounter.stop()
      .then(() => {
        console.log('Step count tracking stopped');
      })
      .catch(error => {
        console.log('Error stopping step count tracking:', error);
      });
  }

}
