import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  constructor(private _Ser:ServiceService) { }

  favs(){
    return this._Ser.favoritos;
    
  };

  ngOnInit() {
  }

}
