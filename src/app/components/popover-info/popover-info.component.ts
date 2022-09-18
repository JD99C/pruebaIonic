import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  constructor(private popcontrol: PopoverController , private popovercontrol:PopoverController) { }

  ngOnInit() {}

  onClick(i){
    console.log(i);
    this.popovercontrol.dismiss({item:i});
  }
  

}
