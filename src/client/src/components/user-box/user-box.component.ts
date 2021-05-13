import { Component, OnInit } from '@angular/core';
import { LayonService } from 'core/services';

@Component({
  selector: 'user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent implements OnInit {

  constructor(public _layon: LayonService) { }

  ngOnInit(): void {
  }

  public dropDown: boolean = false;
}
