import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-local-variable',
  templateUrl: './test-local-variable.component.html',
  styleUrls: ['./test-local-variable.component.scss']
})
export class TestLocalVariableComponent implements OnInit {
  public testInput = "";
  public testClick(data):void {
    alert(data.value);
    console.log(data)
  }
  public sayHello(name:string):void{
    alert(name);
  }
  constructor() { }

  ngOnInit() {
  }

  
}
