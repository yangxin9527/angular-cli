import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-and-child',
  templateUrl: './parent-and-child.component.html',
  styleUrls: ['./parent-and-child.component.scss']
})
export class ParentAndChildComponent implements OnInit {
  public testParam:string ="";
  
  constructor() { }

  ngOnInit() {
  }
  public testClick():void {
    alert("子组件调到了父组件的方法")
  }
}
