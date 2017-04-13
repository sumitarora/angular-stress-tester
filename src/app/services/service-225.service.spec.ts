import { TestBed, inject } from '@angular/core/testing';

import { Service225Service } from './service-225.service';

describe('Service225Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service225Service]
    });
  });

  it('should ...', inject([Service225Service], (service: Service225Service) => {
    expect(service).toBeTruthy();
  }));
});
