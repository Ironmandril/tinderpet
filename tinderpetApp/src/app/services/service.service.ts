import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mascota } from '../modelos/mascota';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  mascotas():Observable<mascota[]>{
    return this._http.get<mascota[]>('http://www.mocky.io/v2/5ca792c1520000b30b97b63e');
  }

favoritos = [];
}

