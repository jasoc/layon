import { Injectable } from '@angular/core';
import { LayonBackendService } from 'services';

@Injectable({
  providedIn: 'root'
})
export class LayonService {

    public userName?: string;

    public userEmail?: string;

    constructor(public LayonBackend: LayonBackendService) { }

}
