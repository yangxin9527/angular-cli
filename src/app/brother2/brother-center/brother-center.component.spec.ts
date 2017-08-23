import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherCenterComponent } from './brother-center.component';

describe('BrotherCenterComponent', () => {
  let component: BrotherCenterComponent;
  let fixture: ComponentFixture<BrotherCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrotherCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrotherCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
