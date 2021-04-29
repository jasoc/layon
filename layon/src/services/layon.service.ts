import { Injectable } from '@angular/core';
import { LayonBackendService } from 'services';

@Injectable({
  providedIn: 'root'
})
export class LayonService {

    public userName?: string;

    public userEmail?: string;

    constructor(public _LayonBackend: LayonBackendService) {
      _LayonBackend.getLocalUserName().subscribe(
        (response) => {
          this.userName = response.data;
        }
      )
    }
}
