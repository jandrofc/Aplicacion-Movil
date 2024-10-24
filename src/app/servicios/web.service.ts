import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  httpClient = inject(HttpClient);

  constructor() { }

  request(type: 'POST' | 'GET' | 'PUT' | 'DELETE', url: string, path: string, body: any = {}){
    return new Promise((resolve) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      if (type == 'POST') {
        this.httpClient.post(url + '/' + path, body, {headers}).subscribe( data => {
          resolve(data);
          return;
        });
      }

      if (type == 'GET') {
        this.httpClient.get(url + '/' + path, {headers}).subscribe( data => {
          resolve(data);
          return;
        });
      }

      if (type == 'PUT') {
        this.httpClient.put(url + '/' + path, body, {headers}).subscribe( data => {
          resolve(data);
          return;
        });
      }

      if (type == 'DELETE') {
        this.httpClient.delete(url + '/' + path, {headers}).subscribe( data => {
          resolve(data);
          return;
        });
      }
    });
  }
}
