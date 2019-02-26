import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  
  //@Input() messageFront:string ;
  messageFront:string = "Message from Front";
  constructor() {
    
   } 

  ngOnInit() {
  }

  

}
