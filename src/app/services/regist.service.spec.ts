import { TestBed, inject } from '@angular/core/testing';

import { RegistService } from './regist.service';

describe('RegistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistService]
    });
  });

  it('should be created', inject([RegistService], (service: RegistService) => {
    expect(service).toBeTruthy();
  }));
});
