import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre: string;
  @Input() apellido: string;

  constructor( private modalControl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos(){
    this.modalControl.dismiss({
      correo: 'pmarreyz@canariaseducacion.es',
      trabajo: 'Docencia e Investigacion'
    });
  }
}
