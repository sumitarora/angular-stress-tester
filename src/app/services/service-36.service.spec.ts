import { TestBed, inject } from '@angular/core/testing';

import { Service36Service } from './service-36.service';

describe('Service36Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service36Service]
    });
  });

  it('should ...', inject([Service36Service], (service: Service36Service) => {
    expect(service).toBeTruthy();
  }));
});
