import { TestBed, inject } from '@angular/core/testing';

import { Service941Service } from './service-941.service';

describe('Service941Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service941Service]
    });
  });

  it('should ...', inject([Service941Service], (service: Service941Service) => {
    expect(service).toBeTruthy();
  }));
});
