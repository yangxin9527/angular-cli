import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-switch',
  templateUrl: './test-ng-switch.component.html',
  styleUrls: ['./test-ng-switch.component.scss']
})
export class TestNgSwitchComponent implements OnInit {
  public testSwitch:string = "test2"
  constructor() { }

  ngOnInit() {
  }

}
