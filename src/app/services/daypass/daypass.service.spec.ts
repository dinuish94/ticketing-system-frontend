import { TestBed, inject } from '@angular/core/testing';

import { DaypassService } from './daypass.service';

describe('DaypassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaypassService]
    });
  });

  it('should be created', inject([DaypassService], (service: DaypassService) => {
    expect(service).toBeTruthy();
  }));
});
