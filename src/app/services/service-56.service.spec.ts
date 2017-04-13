import { TestBed, inject } from '@angular/core/testing';

import { Service56Service } from './service-56.service';

describe('Service56Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service56Service]
    });
  });

  it('should ...', inject([Service56Service], (service: Service56Service) => {
    expect(service).toBeTruthy();
  }));
});
