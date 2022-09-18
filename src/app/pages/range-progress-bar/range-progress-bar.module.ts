import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangeProgressBarPageRoutingModule } from './range-progress-bar-routing.module';

import { RangeProgressBarPage } from './range-progress-bar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangeProgressBarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RangeProgressBarPage]
})
export class RangeProgressBarPageModule {}
