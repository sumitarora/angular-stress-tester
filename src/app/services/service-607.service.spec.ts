import { TestBed, inject } from '@angular/core/testing';

import { Service607Service } from './service-607.service';

describe('Service607Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service607Service]
    });
  });

  it('should ...', inject([Service607Service], (service: Service607Service) => {
    expect(service).toBeTruthy();
  }));
});
