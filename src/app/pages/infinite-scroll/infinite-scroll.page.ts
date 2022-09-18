import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

data: any[] = Array(20);

@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log(event);

    if (this.data.length > 50){ //Condicion para dejar de ejecutar la carga
      event.target.complete();
      this.infiniteScroll.disabled = true; //Desabilitamos el scroll
    }else{
      setTimeout(() =>{
      this.data.push(...Array(20)); //Añadimos 20 elementos al data
      event.target.complete();
      }, 1500) //Se termina la carga cada 1.5 segundos
    }




  }

}
