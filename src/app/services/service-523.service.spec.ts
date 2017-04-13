import { TestBed, inject } from '@angular/core/testing';

import { Service523Service } from './service-523.service';

describe('Service523Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service523Service]
    });
  });

  it('should ...', inject([Service523Service], (service: Service523Service) => {
    expect(service).toBeTruthy();
  }));
});
