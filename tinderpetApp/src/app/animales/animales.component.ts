import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { mascota } from '../modelos/mascota';

@Component({
  selector: 'animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss']
})
export class AnimalesComponent implements OnInit {

  constructor(private _Ser: ServiceService) { }

  mascota: mascota = null;
  index: number = 0;

  ngOnInit(i = this.index) {
    this._Ser.mascotas().subscribe((datos) => {
      console.log("datos:", this.index);
      if (i < 0) {
        i = datos.length - 1;
        this.index = datos.length - 1;
      }
      if (i == datos.length) {
        i = 0;
        this.index = 0;
      }
      this.mascota = datos[i];
    });

  }

  dameMascotaIdx(idx) {
    this.index = idx;
    this.ngOnInit();
  }

  
  like(fav) {
    let alreadyAdded = false;

    for (let i = 0; i <= this._Ser.favoritos.length; i++) {
      console.log(i <= this._Ser.favoritos.length);
      if (this._Ser.favoritos[i] == undefined) {
        console.log('primera vuelta');
      } else {
        if (this._Ser.favoritos[i].id == fav.id) {
          alreadyAdded = true;
          console.log('ha entrado');
        } else {
          console.log(this._Ser.favoritos.length);
        }
      }
    }

    // console.log('esta ya añadido?',!alreadyAdded);
    if (!alreadyAdded) {
      this._Ser.favoritos.push(fav);
    } else {
      console.log('Elige otra, que esta ya está añadida.', fav);
    }
  }
}