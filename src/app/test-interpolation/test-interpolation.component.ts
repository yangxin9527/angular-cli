import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-interpolation',
  templateUrl: './test-interpolation.component.html',
  styleUrls: ['./test-interpolation.component.scss']
})
export class TestInterpolationComponent implements OnInit {
  public title ="我的title 使用public 申明";
  constructor() { }

  ngOnInit() {
  }
  public getValue():any{
    return "调用了方法"
  }

}
