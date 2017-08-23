import { Component, OnInit } from '@angular/core';
import { BrotherService } from './../brother.service';
@Component({
  selector: 'brother-center',
  templateUrl: './brother-center.component.html',
  styleUrls: ['./brother-center.component.scss']
})
export class BrotherCenterComponent implements OnInit {
  public currentConversation:Array<any> = [];
  constructor(public brotherService:BrotherService) { }

  ngOnInit() {
    this.currentConversation = this.brotherService.eventBus
  }

}
