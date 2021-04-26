import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiResult } from 'models';

@Injectable({
  providedIn: 'root'
})
export class LayonBackendService {

    private BASE_URL = "https://localhost:5001";

    constructor(public http: HttpClient) { }

    public getLocalUserName() {
        return this.http.get<apiResult>(
            `${this.BASE_URL}/getinfo/getuserinfo`
        );
    }
}
