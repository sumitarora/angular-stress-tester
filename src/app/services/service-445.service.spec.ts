import { TestBed, inject } from '@angular/core/testing';

import { Service445Service } from './service-445.service';

describe('Service445Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service445Service]
    });
  });

  it('should ...', inject([Service445Service], (service: Service445Service) => {
    expect(service).toBeTruthy();
  }));
});
