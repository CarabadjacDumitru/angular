import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  
  @Input() messageCenter:string;

  constructor() { }

  ngOnInit() {
  }
  
  onShowClicked(){
    console.log("CenterComponent - message | " + this.messageCenter)
  } 

}
