import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit {
  @Input()  childcolor:string;
  @Output() childcolorChange = new EventEmitter<string>();
  public colorArray:Array<string> = ["red","green","yellow"]
  constructor() { }

  ngOnInit() {
  }

  public clickChange(){
    let color = this.childcolor;
    let colorArray = this.colorArray;
    let going = true;
    
    this.colorArray.forEach((element,index,array) => {
      if(going){
        if(element==color){
          if(index+1==array.length)
            color=colorArray[0];
          else
            color=colorArray[index+1];
          going=false;
        }
      }
      });
    this.childcolor = color;
    this.childcolorChange.emit(this.childcolor);
  }
}
