import { Component, OnInit } from '@angular/core';
import { EventServiceService } from './../service/event-service.service';
@Component({
  selector: 'child-2',
  templateUrl: './child-2.component.html',
  styleUrls: ['./child-2.component.scss']
})
export class Child2Component implements OnInit {
  public childArray2:Array<any>=[];
  constructor(public eventService:EventServiceService) { }

  ngOnInit() {
    this.eventService.testArray.subscribe((value)=>{
      console.log(value)
      this.childArray2.push(value);
    })
  }

}
