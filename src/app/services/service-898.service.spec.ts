import { TestBed, inject } from '@angular/core/testing';

import { Service898Service } from './service-898.service';

describe('Service898Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service898Service]
    });
  });

  it('should ...', inject([Service898Service], (service: Service898Service) => {
    expect(service).toBeTruthy();
  }));
});
