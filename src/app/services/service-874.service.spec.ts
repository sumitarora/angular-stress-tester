import { TestBed, inject } from '@angular/core/testing';

import { Service874Service } from './service-874.service';

describe('Service874Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service874Service]
    });
  });

  it('should ...', inject([Service874Service], (service: Service874Service) => {
    expect(service).toBeTruthy();
  }));
});
