import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLocalVariableComponent } from './test-local-variable.component';

describe('TestLocalVariableComponent', () => {
  let component: TestLocalVariableComponent;
  let fixture: ComponentFixture<TestLocalVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLocalVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLocalVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
