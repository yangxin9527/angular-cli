import { Component, OnInit } from '@angular/core';
import { BrotherService } from './../brother.service';
@Component({
  selector: 'brother-right',
  templateUrl: './brother-right.component.html',
  styleUrls: ['./brother-right.component.scss']
})
export class BrotherRightComponent implements OnInit {

  public profile = {
    id:2,
    profilePic:"./assets/img/profile-pic-2.jpg",
    name:"big ming"
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
