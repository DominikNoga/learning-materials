import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/interfaces/Photo';
import { RqApiServiceService } from 'src/app/requestApi/rq-api-service.service';
import { HttpEventType } from '@angular/common/http'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  photos: Photo[] = [];
  isLoading: boolean = false;
  totalBytes = 0;

  constructor(private RqApiServiceService: RqApiServiceService) { }

  ngOnInit(): void {
    this.RqApiServiceService.getPhotos().subscribe(event => {
      switch(event.type){
        case HttpEventType.Sent:
          console.log('Request has been made');
          this.isLoading = true;
          break;

        case HttpEventType.ResponseHeader:
          console.log('Request successful');
          break;
        
        case HttpEventType.DownloadProgress:
          this.totalBytes += event.loaded;

          break;
        
        case HttpEventType.Response:
          setTimeout(() =>{ 
            this.isLoading = false;
          }, 500)
          this.photos = <Photo[]> event.body;
          console.log('Data has loaded');
          console.log(this.photos);
          break;
      }
    })
  }

}
