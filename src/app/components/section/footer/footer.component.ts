import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private clickMessage:string = '';
  private iterator:number = 0;

  @Input() messageFooter:string;

  constructor() { }

  ngOnInit() {
  }
  
  onSendNext() {
    console.log('FooterComponent:onSendNext ' + this.iterator)
    this.iterator ++;
  }

  onClickMe() {
    console.log('FooterComponent:onClickMe ' + this.clickMessage)
    this.clickMessage = 'You are my hero!';
  }

  onShowClicked() {
    console.log("FooterComponent - message | " + this.messageFooter)
  }

}
