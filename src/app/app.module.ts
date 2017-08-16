import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestInterpolationComponent } from './test-interpolation/test-interpolation.component';
import { TestEventBindingComponent } from './test-event-binding/test-event-binding.component';
import { TestNgClassComponent } from './test-ng-class/test-ng-class.component';
import { TestNgForComponent } from './test-ng-for/test-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestInterpolationComponent,
    TestEventBindingComponent,
    TestNgClassComponent,
    TestNgForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
