import { TestBed, inject } from '@angular/core/testing';

import { Service405Service } from './service-405.service';

describe('Service405Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service405Service]
    });
  });

  it('should ...', inject([Service405Service], (service: Service405Service) => {
    expect(service).toBeTruthy();
  }));
});
