import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-twoway-bind',
  templateUrl: './test-twoway-bind.component.html',
  styleUrls: ['./test-twoway-bind.component.scss']
})
export class TestTwowayBindComponent implements OnInit {
  public color:string ="red";

  constructor() { }

  ngOnInit() {
  }

}
