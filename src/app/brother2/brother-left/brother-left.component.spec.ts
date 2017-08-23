import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherLeftComponent } from './brother-left.component';

describe('BrotherLeftComponent', () => {
  let component: BrotherLeftComponent;
  let fixture: ComponentFixture<BrotherLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrotherLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrotherLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
