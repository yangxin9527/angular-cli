import { TestBed, inject } from '@angular/core/testing';

import { BrotherService } from './brother.service';

describe('BrotherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrotherService]
    });
  });

  it('should be created', inject([BrotherService], (service: BrotherService) => {
    expect(service).toBeTruthy();
  }));
});
