import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  apiurl = environment.apiUrl;
  // headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  // httpOptions = {
  //   headers: this.headers
  // };

  constructor(
    private http: HttpClient
  ) {}

  contactUs(body) {
    console.log('Body: ', body);
    return this.http.post(environment.apiUrl, body);
  }
}
