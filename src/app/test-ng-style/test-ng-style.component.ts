import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-style',
  templateUrl: './test-ng-style.component.html',
  styleUrls: ['./test-ng-style.component.scss']
})
export class TestNgStyleComponent implements OnInit {
  public age:number = 10;
  constructor() { }
  public currentStyle:{}={
    fontSize:this.age+"px"
  };
  ngOnInit() {
  }

  public numChange(num:number):void{
  
      this.age = this.age + num>=10?this.age + num:10;
      console.log(this.age);
      this.currentStyle['fontSize']=this.age+"px"
     
 

  }
}
