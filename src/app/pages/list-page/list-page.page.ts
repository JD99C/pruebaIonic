import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.page.html',
  styleUrls: ['./list-page.page.scss'],
})
export class ListPagePage implements OnInit {

  usuarios:Observable<any>;

  constructor( private dataservice : DataService) { }

  ngOnInit() {
    //en this.usuario no es necesario usar el subscribe porque ya es un observable
    //this.dataservice.getUsuarios().subscribe(console.log)
    this.usuarios = this.dataservice.getUsuarios();
  }

}
