import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dropDown: boolean = true;

}
