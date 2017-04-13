import { TestBed, inject } from '@angular/core/testing';

import { Service222Service } from './service-222.service';

describe('Service222Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service222Service]
    });
  });

  it('should ...', inject([Service222Service], (service: Service222Service) => {
    expect(service).toBeTruthy();
  }));
});
