import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http : HttpClient) {}

  encurtarLink(objeto:any):Observable<any>{
   return this.http.post(`${ 'https://api.encurtador.dev/encurtamentos' }`, objeto)
           
  }
}
