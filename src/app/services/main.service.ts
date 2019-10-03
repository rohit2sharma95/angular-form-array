import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MainService {

  constructor(
    private _HttpClient: HttpClient
  ) { }

  getData(): Observable<any> {
    return this._HttpClient.get('assets/data/data.json');
  }

}
