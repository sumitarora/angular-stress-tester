import { TestBed, inject } from '@angular/core/testing';

import { Service76Service } from './service-76.service';

describe('Service76Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service76Service]
    });
  });

  it('should ...', inject([Service76Service], (service: Service76Service) => {
    expect(service).toBeTruthy();
  }));
});
