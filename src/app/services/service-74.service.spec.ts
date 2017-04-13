import { TestBed, inject } from '@angular/core/testing';

import { Service74Service } from './service-74.service';

describe('Service74Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service74Service]
    });
  });

  it('should ...', inject([Service74Service], (service: Service74Service) => {
    expect(service).toBeTruthy();
  }));
});
