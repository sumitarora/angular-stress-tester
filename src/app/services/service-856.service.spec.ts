import { TestBed, inject } from '@angular/core/testing';

import { Service856Service } from './service-856.service';

describe('Service856Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service856Service]
    });
  });

  it('should ...', inject([Service856Service], (service: Service856Service) => {
    expect(service).toBeTruthy();
  }));
});
