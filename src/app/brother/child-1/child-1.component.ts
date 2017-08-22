import { Component, OnInit } from '@angular/core';
import { EventServiceService } from './../service/event-service.service';

@Component({
  selector: 'child-1',
  templateUrl: './child-1.component.html',
  styleUrls: ['./child-1.component.scss']
})
export class Child1Component implements OnInit {
  constructor(public event:EventServiceService) { }
  public testClick():void {
    this.event.testArray.next("组件触发");
  }

  ngOnInit() {
  }

}
