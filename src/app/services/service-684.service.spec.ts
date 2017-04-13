import { TestBed, inject } from '@angular/core/testing';

import { Service684Service } from './service-684.service';

describe('Service684Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service684Service]
    });
  });

  it('should ...', inject([Service684Service], (service: Service684Service) => {
    expect(service).toBeTruthy();
  }));
});
