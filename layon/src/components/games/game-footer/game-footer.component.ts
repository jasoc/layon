import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'game-footer',
  templateUrl: './game-footer.component.html',
  styleUrls: ['./game-footer.component.scss']
})
export class GameFooterComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  @Input() public currentTitle!: string;

  // BUG GRAVE, ANY DA TOGLIERE
  @Input() public genres!: any;


}
