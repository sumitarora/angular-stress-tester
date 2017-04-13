import { TestBed, inject } from '@angular/core/testing';

import { Service928Service } from './service-928.service';

describe('Service928Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service928Service]
    });
  });

  it('should ...', inject([Service928Service], (service: Service928Service) => {
    expect(service).toBeTruthy();
  }));
});
