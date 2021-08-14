import { TestBed } from '@angular/core/testing';

import { LocalizationServiceService } from './localization.service';

describe('LocalizationServiceService', () => {
  let service: LocalizationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalizationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
