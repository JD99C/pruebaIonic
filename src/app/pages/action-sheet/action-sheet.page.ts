import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})




export class ActionSheetPage implements OnInit {

  constructor( private actionSheetController:ActionSheetController ) {}

  ngOnInit() {
  }
  

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
    header: 'Albums',
    cssClass: 'my-custom-class',
    backdropDismiss:false,
    buttons: [{
    text: 'Delete',
    role: 'destructive',
    icon: 'trash',
    id: 'delete-button',
    data: {
    type: 'delete'
    },
    cssClass:'rojo',
    handler: () => {
    console.log('Delete clicked');
    }
    }, {
    text: 'Share',
    icon: 'share',
    data: 10,
    handler: () => {
    console.log('Share clicked');
    }
    }, {
    text: 'Play (open modal)',
    icon: 'caret-forward-circle',
    data: 'Data value',
    handler: () => {
    console.log('Play clicked');
    }
    }, {
    text: 'Favorite',
    icon: 'heart',
    handler: () => {
    console.log('Favorite clicked');
    }
    }, {
    text: 'Cancel',
    icon: 'close',
    role: 'cancel',
    handler: () => {
    console.log('Cancel clicked');
    }
    }]
    });
   
    await actionSheet.present();
    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
    }


  onclick(){
    this.presentActionSheet();
  }

}  