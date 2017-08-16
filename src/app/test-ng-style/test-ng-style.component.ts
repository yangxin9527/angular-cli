import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-style',
  templateUrl: './test-ng-style.component.html',
  styleUrls: ['./test-ng-style.component.scss']
})
export class TestNgStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public age:number = 10;
  public numAdd():void{
    this.age++
  }
}
