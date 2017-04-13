import { TestBed, inject } from '@angular/core/testing';

import { Service410Service } from './service-410.service';

describe('Service410Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service410Service]
    });
  });

  it('should ...', inject([Service410Service], (service: Service410Service) => {
    expect(service).toBeTruthy();
  }));
});
