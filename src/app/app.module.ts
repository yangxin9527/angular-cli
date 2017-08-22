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

@NgModule({
  declarations: [
    AppComponent,
    ParentAndChildComponent,
    ChildComponent,
    BrotherComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EventServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
