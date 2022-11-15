import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormComponent } from './form.component';
import { global } from './global';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  public url: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = global.url;
  }

  test(){
    return "Hola Mundo desde un servicio";
  }


      // Mandando datos a backend Laravel
      // Primero convertimos a JSON  (Cadena de texto)
      

  guardar(usuario: any): Observable<any>{
    let json = JSON.stringify(usuario);
    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'miFormulario', params, {headers: headers});
  }
}
