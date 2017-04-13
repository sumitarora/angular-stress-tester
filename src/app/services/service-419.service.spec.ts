import { TestBed, inject } from '@angular/core/testing';

import { Service419Service } from './service-419.service';

describe('Service419Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service419Service]
    });
  });

  it('should ...', inject([Service419Service], (service: Service419Service) => {
    expect(service).toBeTruthy();
  }));
});
