import { TestBed, inject } from '@angular/core/testing';

import { Service722Service } from './service-722.service';

describe('Service722Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service722Service]
    });
  });

  it('should ...', inject([Service722Service], (service: Service722Service) => {
    expect(service).toBeTruthy();
  }));
});
