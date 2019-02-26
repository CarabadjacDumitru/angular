import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() messageHeader:string ;
  private passed:boolean = false;
  private current:number = 0;
  constructor() { }

  getCurrent(){
    return this.current
  }

  isPassed(){
    return this.passed;
  }

  ngOnInit() {
  }

  onShowClicked(){
    console.log("HeaderComponent - message | " + this.messageHeader)
  } 
}
