import { TestBed, inject } from '@angular/core/testing';

import { Service768Service } from './service-768.service';

describe('Service768Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service768Service]
    });
  });

  it('should ...', inject([Service768Service], (service: Service768Service) => {
    expect(service).toBeTruthy();
  }));
});
