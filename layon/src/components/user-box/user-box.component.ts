import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent implements OnInit {

  constructor(public http: HttpClient) {
    this.http.get<string>("https://localhost:5001/getinfo/getuserinfo")
      .subscribe( (fromWinName: string) => {
        console.log("tornato", fromWinName);
        this.name = fromWinName;
      });
  }
  
  ngOnInit(): void {
  }

  public name!: string;

  public dropDown: boolean = false;

}
