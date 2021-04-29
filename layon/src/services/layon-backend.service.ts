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

    public getGamesFromMachine() {
        return this.http.get<apiResult>(
            `${this.BASE_URL}/getinfo/returngames`
        );
    }

    public openGame(path: string) {
        return this.http.post(
            `${this.BASE_URL}/openexecutable/openfile`, path
        );
    }

    public writeGamesIntoJson(name: string, path: any) {  
        // No return, this function is made to overwrite
        return this.http.post(
            `${this.BASE_URL}/getinfo/insertpath`, name, path // <-- Ma perché path vuole il tipo any? Porca madonna.
        );
    }
}
