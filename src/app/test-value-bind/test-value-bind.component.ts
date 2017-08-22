import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-value-bind',
  templateUrl: './test-value-bind.component.html',
  styleUrls: ['./test-value-bind.component.scss']
})
export class TestValueBindComponent implements OnInit {
  public imgSrc:string ="./assets/imgs/1.jpg"
  constructor() { }

  ngOnInit() {
  }
  public changeImg():void {
    if(Math.random()>0.5){
      this.imgSrc = "./assets/imgs/1.jpg"
    }else{

      this.imgSrc = "./assets/imgs/2.jpg"
    }
  }
}
