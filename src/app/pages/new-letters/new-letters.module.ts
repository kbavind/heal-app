import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLettersPageRoutingModule } from './new-letters-routing.module';

import { NewLettersPage } from './new-letters.page';
import { ComponentsModule } from 'src/app/components/components.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLettersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewLettersPage]
})
export class NewLettersPageModule {}
