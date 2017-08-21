import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.scss']
})
export class TestPipeComponent implements OnInit {
  public currentTime = new Date();
  public heroes:Array<any> =["spider man","iron man","super man"];
  public hero:string ="";
  public pushClick():void {
    console.log(this.hero);
    this.heroes.push(this.hero);
  }
  constructor() { }

  ngOnInit() {
  }

}
