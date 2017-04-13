import { TestBed, inject } from '@angular/core/testing';

import { Service731Service } from './service-731.service';

describe('Service731Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service731Service]
    });
  });

  it('should ...', inject([Service731Service], (service: Service731Service) => {
    expect(service).toBeTruthy();
  }));
});
