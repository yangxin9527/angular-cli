import { Component, OnInit } from '@angular/core';
import { EventServiceService } from './../service/event-service.service';

@Component({
  selector: 'child-1',
  templateUrl: './child-1.component.html',
  styleUrls: ['./child-1.component.scss']
})
export class Child1Component implements OnInit {
  public childArray:Array<any>=[];
  constructor(public event:EventServiceService) { }
  public testClick():void {
    let time = new Date();
    this.childArray.push(time)
    this.event.testArray.next(time.toString());
  }

  ngOnInit() {
  }

}
