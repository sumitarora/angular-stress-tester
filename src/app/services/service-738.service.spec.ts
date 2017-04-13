import { TestBed, inject } from '@angular/core/testing';

import { Service738Service } from './service-738.service';

describe('Service738Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service738Service]
    });
  });

  it('should ...', inject([Service738Service], (service: Service738Service) => {
    expect(service).toBeTruthy();
  }));
});
