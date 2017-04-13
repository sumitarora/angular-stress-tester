import { TestBed, inject } from '@angular/core/testing';

import { Service505Service } from './service-505.service';

describe('Service505Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service505Service]
    });
  });

  it('should ...', inject([Service505Service], (service: Service505Service) => {
    expect(service).toBeTruthy();
  }));
});
