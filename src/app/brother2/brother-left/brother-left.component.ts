import { BrotherService } from './../brother.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brother-left',
  templateUrl: './brother-left.component.html',
  styleUrls: ['./brother-left.component.scss']
})
export class BrotherLeftComponent implements OnInit {

  public profile = {
    id:1,
    profilePic:"./assets/img/profile-pic-1.jpg",
    name:"small li"
  };
  public message:string="";
  public sendMessage():void{
    if(this.message !=""){
      let data ={
        message:this.message,
        time:new Date().toString(),
        profile:this.profile
      };
      this.brotherService.eventBus.push(data);
      this.message="";
    }
    
  }
  constructor(public brotherService:BrotherService) { }
  ngOnInit() {
  }


}
