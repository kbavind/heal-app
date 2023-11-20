import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewLettersPage } from './new-letters.page';

const routes: Routes = [
  {
    path: '',
    component: NewLettersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLettersPageRoutingModule {}
