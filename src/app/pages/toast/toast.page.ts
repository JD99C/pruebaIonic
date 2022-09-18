import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastControl: ToastController) { }

  ngOnInit() {
  }


  async presentToast(){
    const toast = await this.toastControl.create({
      message: 'Your settings have been saved',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions(){
    const toast = await this.toastControl.create({
      header: 'Toast header',
      message: 'Click to me',
      icon: 'information-circle',
      position:'top'
    });
  }
}
