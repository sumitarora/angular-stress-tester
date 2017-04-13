import { TestBed, inject } from '@angular/core/testing';

import { Service470Service } from './service-470.service';

describe('Service470Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service470Service]
    });
  });

  it('should ...', inject([Service470Service], (service: Service470Service) => {
    expect(service).toBeTruthy();
  }));
});
