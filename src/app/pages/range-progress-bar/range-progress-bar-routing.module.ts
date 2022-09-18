import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangeProgressBarPage } from './range-progress-bar.page';

const routes: Routes = [
  {
    path: '',
    component: RangeProgressBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangeProgressBarPageRoutingModule {}
