import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  //父组件向子组件传递参数
  private _panelTitle:string="我是子组件";
  public newFlag:string="我是子组件";
  @Input()
  set panelTitle(panelTitle:string){
    this._panelTitle="【"+panelTitle+"】";
  }

  get panelTitle():string{
    return this._panelTitle;
  }
  
  @Input()
  set flag(flag:string){
    this.newFlag=flag;
  }

  get flag():string{
    return this.newFlag;
  }

  //父组件调子组件内容
  clickChild():void {
    alert("第三个子组件内容：_panelTitle="+this._panelTitle+" "+"newFlag="+this.newFlag)
  }
  //子组件调父组件内容
  @Output()
  public follow = new EventEmitter();
  public clickParent():void {
    this.follow.emit()
  }
  constructor() { }

  ngOnInit() {
  }

}
