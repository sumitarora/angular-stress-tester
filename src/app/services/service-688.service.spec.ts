import { TestBed, inject } from '@angular/core/testing';

import { Service688Service } from './service-688.service';

describe('Service688Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service688Service]
    });
  });

  it('should ...', inject([Service688Service], (service: Service688Service) => {
    expect(service).toBeTruthy();
  }));
});
