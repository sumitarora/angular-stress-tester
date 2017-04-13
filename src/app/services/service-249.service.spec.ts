import { TestBed, inject } from '@angular/core/testing';

import { Service249Service } from './service-249.service';

describe('Service249Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service249Service]
    });
  });

  it('should ...', inject([Service249Service], (service: Service249Service) => {
    expect(service).toBeTruthy();
  }));
});
