import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { ChildComponent } from './parent-and-child/child/child.component';
import { EventServiceService } from './brother/service/event-service.service';
import { BrotherComponent } from './brother/brother.component';
import { Child1Component } from './brother/child-1/child-1.component';
import { Child2Component } from './brother/child-2/child-2.component';
import { Brother2Component } from './brother2/brother2.component';
import { BrotherLeftComponent } from './brother2/brother-left/brother-left.component';
import { BrotherCenterComponent } from './brother2/brother-center/brother-center.component';
import { BrotherRightComponent } from './brother2/brother-right/brother-right.component';
import { BrotherService } from './brother2/brother.service';
import { TestLocalstorageComponent } from './test-localstorage/test-localstorage.component';
import { LocalChild1Component } from './test-localstorage/local-child-1/local-child-1.component';
import { LocalChild2Component } from './test-localstorage/local-child-2/local-child-2.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentAndChildComponent,
    ChildComponent,
    BrotherComponent,
    Child1Component,
    Child2Component,
    Brother2Component,
    BrotherLeftComponent,
    BrotherCenterComponent,
    BrotherRightComponent,
    TestLocalstorageComponent,
    LocalChild1Component,
    LocalChild2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EventServiceService,BrotherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
