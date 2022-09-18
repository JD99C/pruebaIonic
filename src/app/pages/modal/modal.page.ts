import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalControl: ModalController) { }

  ngOnInit() {
  }

async mostarModalInfo(){
  const modal = await this.modalControl.create({
    component: ModalInfoPage,
    componentProps: {
      nombre:'JD',
      apellido:'CS'
    }
  });

  await modal.present();

  const {data} = await modal.onDidDismiss();
  console.log(data);

}

}
