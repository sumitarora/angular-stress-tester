import { TestBed, inject } from '@angular/core/testing';

import { Service316Service } from './service-316.service';

describe('Service316Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service316Service]
    });
  });

  it('should ...', inject([Service316Service], (service: Service316Service) => {
    expect(service).toBeTruthy();
  }));
});
