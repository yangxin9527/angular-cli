import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-model',
  templateUrl: './test-ng-model.component.html',
  styleUrls: ['./test-ng-model.component.scss']
})
export class TestNgModelComponent implements OnInit {
  public name:string="yx";
  constructor() { }

  ngOnInit() {
  }

}
