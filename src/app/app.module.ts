import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestInterpolationComponent } from './test-interpolation/test-interpolation.component';
import { TestEventBindingComponent } from './test-event-binding/test-event-binding.component';
import { TestNgClassComponent } from './test-ng-class/test-ng-class.component';
import { TestNgForComponent } from './test-ng-for/test-ng-for.component';
import { TestNgIfComponent } from './test-ng-if/test-ng-if.component';
import { TestNgModelComponent } from './test-ng-model/test-ng-model.component';
import { TestNgStyleComponent } from './test-ng-style/test-ng-style.component';
import { TestNgSwitchComponent } from './test-ng-switch/test-ng-switch.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { TestSafeNavComponent } from './test-safe-nav/test-safe-nav.component';
import { TestLocalVariableComponent } from './test-local-variable/test-local-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestInterpolationComponent,
    TestEventBindingComponent,
    TestNgClassComponent,
    TestNgForComponent,
    TestNgIfComponent,
    TestNgModelComponent,
    TestNgStyleComponent,
    TestNgSwitchComponent,
    TestPipeComponent,
    TestSafeNavComponent,
    TestLocalVariableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
