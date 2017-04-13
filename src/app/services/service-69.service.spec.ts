import { TestBed, inject } from '@angular/core/testing';

import { Service69Service } from './service-69.service';

describe('Service69Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service69Service]
    });
  });

  it('should ...', inject([Service69Service], (service: Service69Service) => {
    expect(service).toBeTruthy();
  }));
});
