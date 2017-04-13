import { TestBed, inject } from '@angular/core/testing';

import { Service529Service } from './service-529.service';

describe('Service529Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service529Service]
    });
  });

  it('should ...', inject([Service529Service], (service: Service529Service) => {
    expect(service).toBeTruthy();
  }));
});
