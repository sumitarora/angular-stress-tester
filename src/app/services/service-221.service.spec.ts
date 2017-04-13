import { TestBed, inject } from '@angular/core/testing';

import { Service221Service } from './service-221.service';

describe('Service221Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service221Service]
    });
  });

  it('should ...', inject([Service221Service], (service: Service221Service) => {
    expect(service).toBeTruthy();
  }));
});
