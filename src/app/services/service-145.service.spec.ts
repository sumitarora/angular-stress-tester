import { TestBed, inject } from '@angular/core/testing';

import { Service145Service } from './service-145.service';

describe('Service145Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service145Service]
    });
  });

  it('should ...', inject([Service145Service], (service: Service145Service) => {
    expect(service).toBeTruthy();
  }));
});
