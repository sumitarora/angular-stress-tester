import { TestBed, inject } from '@angular/core/testing';

import { Service657Service } from './service-657.service';

describe('Service657Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service657Service]
    });
  });

  it('should ...', inject([Service657Service], (service: Service657Service) => {
    expect(service).toBeTruthy();
  }));
});
