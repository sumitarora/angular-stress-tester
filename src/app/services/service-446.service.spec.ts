import { TestBed, inject } from '@angular/core/testing';

import { Service446Service } from './service-446.service';

describe('Service446Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service446Service]
    });
  });

  it('should ...', inject([Service446Service], (service: Service446Service) => {
    expect(service).toBeTruthy();
  }));
});
