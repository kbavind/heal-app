import { NgModule } from '@angular/core';
import { FacilityComponent } from './facility/facility.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';

export const components = [
  FacilityComponent,
  EmptyScreenComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [...components]
})
export class ComponentsModule { }