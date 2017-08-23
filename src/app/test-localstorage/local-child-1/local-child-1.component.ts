import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'local-child-1',
  templateUrl: './local-child-1.component.html',
  styleUrls: ['./local-child-1.component.scss']
})
export class LocalChild1Component implements OnInit {
  
 
  public profile = {
    id:1,
    profilePic:"./assets/img/profile-pic-1.jpg",
    name:"small li"
  };
  public message:string="";
  public sendMessage():void{
    if(this.message !=""){
      let item ={
        message:this.message,
        time:new Date().toString(),
        profile:this.profile
      };
      let conversation =window.sessionStorage.getItem("conversation");
      console.log(conversation)
      if(conversation){
        console.log(conversation);
        let newConversation = JSON.parse(conversation);
        newConversation.data.push(item);
        window.sessionStorage.setItem("conversation",JSON.stringify(newConversation));
      }else{
        window.sessionStorage.setItem("conversation",JSON.stringify({data:[item]}));
      }
      this.message="";
    }
    
  }
  constructor() { }

  ngOnInit() {
  }

}
