import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTwowayBindComponent } from './test-twoway-bind.component';

describe('TestTwowayBindComponent', () => {
  let component: TestTwowayBindComponent;
  let fixture: ComponentFixture<TestTwowayBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTwowayBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTwowayBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
