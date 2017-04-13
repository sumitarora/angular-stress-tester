import { TestBed, inject } from '@angular/core/testing';

import { Service332Service } from './service-332.service';

describe('Service332Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service332Service]
    });
  });

  it('should ...', inject([Service332Service], (service: Service332Service) => {
    expect(service).toBeTruthy();
  }));
});
