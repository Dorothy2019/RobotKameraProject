import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';


@Injectable()
export class MatiereApiService {
  constructor(private http: HttpClient,  
              private router: Router) { }
  
  url = 'http://192.168.0.38:8080';

  
  getPhoto() : Observable<String> {
    
    let obs=this
      .http
      .get<String>(`${this.url}/photo`, {
        headers: new HttpHeaders({
        'Cache-Control':  'no-cache,no-store, must-revalidate, post-check=0, pre-check=0',
        'Pragma': 'no-cache',
        'Expires': '0'
        })
        
      });
      obs.subscribe(
        res => {
            console.log(res);
            
          },
          err => {
            console.log('Error occured:' , err);
            
          }
      );
      return obs;
  }

 
}
