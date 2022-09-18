import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popcontrol: PopoverController) { }

  ngOnInit() {
  }

  
  async presentPopover(event: any){
    
    const popover = await this.popcontrol.create({
    component: PopoverInfoComponent,
    event: event,
    translucent: true

  });
  await popover.present();
  const{data} = await popover.onWillDismiss();
  console.log(data);
  }
}
