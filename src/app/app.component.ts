import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  componentes:Observable<Componente[]>
  constructor(private dataservice:DataService) {}

  ngOnInit(){
    this.componentes = this.dataservice.getOptsMenu();
  }
}
