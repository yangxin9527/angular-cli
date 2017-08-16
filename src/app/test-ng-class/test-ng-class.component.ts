import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'test-ng-class',
  templateUrl: './test-ng-class.component.html',
  styleUrls: ['./test-ng-class.component.scss']
})
export class TestNgClassComponent implements OnInit {
  public currentClass : {};
  public class1: boolean = false;
  public class2: boolean = false;
  public class3: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  testClick() {
    this.class1 = !this.class1,
    this.class2 = !this.class2,
    this.class3 = !this.class3

    this.currentClass = {
      'red' : this.class1,
      'bgGreen' : this.class2,
      'font18' : this.class3,
    };
  }
}
