import { TestBed, inject } from '@angular/core/testing';

import { Service184Service } from './service-184.service';

describe('Service184Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service184Service]
    });
  });

  it('should ...', inject([Service184Service], (service: Service184Service) => {
    expect(service).toBeTruthy();
  }));
});
