import { TestBed, inject } from '@angular/core/testing';

import { Service132Service } from './service-132.service';

describe('Service132Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service132Service]
    });
  });

  it('should ...', inject([Service132Service], (service: Service132Service) => {
    expect(service).toBeTruthy();
  }));
});
