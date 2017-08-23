import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'local-child-2',
  templateUrl: './local-child-2.component.html',
  styleUrls: ['./local-child-2.component.scss']
})
export class LocalChild2Component implements OnInit {
  public currentConversation;
  public showConversation():void {
    this.currentConversation = JSON.parse(window.sessionStorage.getItem("conversation"));
  }
 
  constructor() { }

  ngOnInit() {
    
  }

}
