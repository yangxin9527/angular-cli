import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-for',
  templateUrl: './test-ng-for.component.html',
  styleUrls: ['./test-ng-for.component.scss']
})
export class TestNgForComponent implements OnInit {
  public races:any =[
    "今天去商店",
    "看到一个老太婆",
    "跳广场舞"
  ];
  public testArr:Array<any>=[
    {name:"vava",score:50},
    {name:"小白",score:80},
    {name:"pg万",score:100},
    {name:"艾福杰尼",score:90},
  ];
  constructor() { }

  ngOnInit() {
  }
  public scoreState(score):string {
    if(score==100){
      return "list-group-item-success";
    }else if(score>80){
      return "list-group-item-info";        
    }else if(score>60){   
      return "list-group-item-warning";     
    }else{   
      return "list-group-item-danger";      
    }
  }

}
