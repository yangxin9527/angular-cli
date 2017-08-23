import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLocalstorageComponent } from './test-localstorage.component';

describe('TestLocalstorageComponent', () => {
  let component: TestLocalstorageComponent;
  let fixture: ComponentFixture<TestLocalstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLocalstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLocalstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
