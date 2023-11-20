import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacilityPageRoutingModule } from './facility-routing.module';

import { FacilityPage } from './facility.page';
import { ComponentsModule } from 'src/app/components/components.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacilityPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FacilityPage]
})
export class FacilityPageModule {}
