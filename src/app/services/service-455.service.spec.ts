import { TestBed, inject } from '@angular/core/testing';

import { Service455Service } from './service-455.service';

describe('Service455Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service455Service]
    });
  });

  it('should ...', inject([Service455Service], (service: Service455Service) => {
    expect(service).toBeTruthy();
  }));
});
