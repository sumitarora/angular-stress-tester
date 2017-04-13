import { TestBed, inject } from '@angular/core/testing';

import { Service837Service } from './service-837.service';

describe('Service837Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service837Service]
    });
  });

  it('should ...', inject([Service837Service], (service: Service837Service) => {
    expect(service).toBeTruthy();
  }));
});
