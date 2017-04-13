import { TestBed, inject } from '@angular/core/testing';

import { Service870Service } from './service-870.service';

describe('Service870Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service870Service]
    });
  });

  it('should ...', inject([Service870Service], (service: Service870Service) => {
    expect(service).toBeTruthy();
  }));
});
