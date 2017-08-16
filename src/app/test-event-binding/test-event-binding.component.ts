import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'test-event-binding',
  templateUrl: './test-event-binding.component.html',
  styleUrls: ['./test-event-binding.component.scss']
})
export class TestEventBindingComponent implements OnInit {
  public test= '请点击';
  public testClickEvent(event): void {
      this.test = '按钮点击啦';
  }
  constructor() { }

  ngOnInit() {
  }

}
