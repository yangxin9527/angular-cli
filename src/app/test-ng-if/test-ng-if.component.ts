import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-if',
  templateUrl: './test-ng-if.component.html',
  styleUrls: ['./test-ng-if.component.scss']
})
export class TestNgIfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public test:boolean = true;
  testToggle = function(){
    this.test = !this.test;
  }
  public testToggle2():void {
    this.test = !this.test;
  }
}
