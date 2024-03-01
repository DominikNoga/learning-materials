import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Photo } from '../interfaces/Photo';

@Injectable({
  providedIn: 'root'
})
export class RqApiServiceService {
  API_URL = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      this.API_URL,
      {
        reportProgress: true,
        responseType: 'json'      
      },
    )
    return this.http.request(request);
  }
}
