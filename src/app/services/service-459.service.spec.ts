import { TestBed, inject } from '@angular/core/testing';

import { Service459Service } from './service-459.service';

describe('Service459Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service459Service]
    });
  });

  it('should ...', inject([Service459Service], (service: Service459Service) => {
    expect(service).toBeTruthy();
  }));
});
