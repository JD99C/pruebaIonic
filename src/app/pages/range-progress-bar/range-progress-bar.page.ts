import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-progress-bar',
  templateUrl: './range-progress-bar.page.html',
  styleUrls: ['./range-progress-bar.page.scss'],
})
export class RangeProgressBarPage implements OnInit {

  porcentaje: number=0.1;

  constructor() { }

  ngOnInit() {
  }

  rangeChange(event){
    this.porcentaje = event.detail.value / 100;
  }

}
