import { TestBed, inject } from '@angular/core/testing';

import { Service835Service } from './service-835.service';

describe('Service835Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service835Service]
    });
  });

  it('should ...', inject([Service835Service], (service: Service835Service) => {
    expect(service).toBeTruthy();
  }));
});
