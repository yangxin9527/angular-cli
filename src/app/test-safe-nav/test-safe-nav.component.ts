import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-safe-nav',
  templateUrl: './test-safe-nav.component.html',
  styleUrls: ['./test-safe-nav.component.scss']
})
export class TestSafeNavComponent implements OnInit {
  public currentRace:any ={
    name:"yx",
    age:"18",
    detail:{
      "prize":["LOL 2017 LPL 冠军","青少年诗词朗诵2017亚军"],
      "introduce":"一顿操作猛如虎 一看战绩0-5"
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
