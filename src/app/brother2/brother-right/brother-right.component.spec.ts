import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherRightComponent } from './brother-right.component';

describe('BrotherRightComponent', () => {
  let component: BrotherRightComponent;
  let fixture: ComponentFixture<BrotherRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrotherRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrotherRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
