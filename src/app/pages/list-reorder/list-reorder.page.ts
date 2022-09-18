import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
personajes: string[] = ['acuaman', 'spiderman', 'batman', 'goku', 'oliver'];
  constructor() { }

  ngOnInit() {
  }

  doReorder(event){
    console.log(event);

    const itemMover = this.personajes.splice(event.detail.from, 1)[0]; //Remueve elemento
    this.personajes.splice(event.detail.to, 0, itemMover)[0]; //No removemos e insertamos donde corresponda
    event.detail.complete();
    console.log(this.personajes);
  }

  toggle = false;
  onClick(){
    this.toggle = !this.toggle;
  }




}
