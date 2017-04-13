import { TestBed, inject } from '@angular/core/testing';

import { Service17Service } from './service-17.service';

describe('Service17Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service17Service]
    });
  });

  it('should ...', inject([Service17Service], (service: Service17Service) => {
    expect(service).toBeTruthy();
  }));
});
