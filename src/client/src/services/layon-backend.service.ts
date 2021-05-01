import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiResult } from 'models';

@Injectable({
  providedIn: 'root'
})
export class LayonBackendService {

    private BASE_URL = "http://localhost:3000";
    
    constructor(public http: HttpClient) { }

    public getLocalUserName() {
        return this.http.get<apiResult>(
            `${this.BASE_URL}/getinfo/getuserinfo`
        );
    }

    public getGamesFromMachine() {
        return this.http.get<apiResult>(
            `${this.BASE_URL}/getinfo/returngames`
        );
    }

    public openGame(path: string) {
        return this.http.post(
            `${this.BASE_URL}/OpenExecutable/OpenFile`,
            <apiResult> { data: path }
        );
    }

    public writeGamesIntoJson(name: string, path: string) {  
        return this.http.post(
            `${this.BASE_URL}/tests/dio`, { data: {name: name, path: path } }
        );
    }
}
