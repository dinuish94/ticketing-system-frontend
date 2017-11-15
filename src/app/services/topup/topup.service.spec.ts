import { TestBed, inject } from '@angular/core/testing';

import { TopupService } from './topup.service';

describe('TopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopupService]
    });
  });

  it('should be created', inject([TopupService], (service: TopupService) => {
    expect(service).toBeTruthy();
  }));
});
