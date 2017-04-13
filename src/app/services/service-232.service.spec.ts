import { TestBed, inject } from '@angular/core/testing';

import { Service232Service } from './service-232.service';

describe('Service232Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service232Service]
    });
  });

  it('should ...', inject([Service232Service], (service: Service232Service) => {
    expect(service).toBeTruthy();
  }));
});
