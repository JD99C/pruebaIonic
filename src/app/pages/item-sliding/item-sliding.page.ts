import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-item-sliding',
  templateUrl: './item-sliding.page.html',
  styleUrls: ['./item-sliding.page.scss'],
})
export class ItemSlidingPage implements OnInit {

  usuarios:Observable<any>;

  constructor( private dataservice : DataService ) { }

  ngOnInit() {
    //en this.usuario no es necesario usar el subscribe porque ya es un observable
    //this.dataservice.getUsuarios().subscribe(console.log)
    this.usuarios = this.dataservice.getUsuarios();
  }

  @ViewChild(IonList) ionList: IonList;

  favorite(user:any){
    console.log(user.name);
    this.ionList.closeSlidingItems();
  }

  share(user: any){
    console.log(user.email);
    this.ionList.closeSlidingItems();  
  }

  delete(user: any){
    console.log(user.phone);
    this.ionList.closeSlidingItems();
  }

}
