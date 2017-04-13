import { TestBed, inject } from '@angular/core/testing';

import { Service479Service } from './service-479.service';

describe('Service479Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service479Service]
    });
  });

  it('should ...', inject([Service479Service], (service: Service479Service) => {
    expect(service).toBeTruthy();
  }));
});
