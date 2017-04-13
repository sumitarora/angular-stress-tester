import { TestBed, inject } from '@angular/core/testing';

import { Service725Service } from './service-725.service';

describe('Service725Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service725Service]
    });
  });

  it('should ...', inject([Service725Service], (service: Service725Service) => {
    expect(service).toBeTruthy();
  }));
});
