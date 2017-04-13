import { TestBed, inject } from '@angular/core/testing';

import { Service969Service } from './service-969.service';

describe('Service969Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service969Service]
    });
  });

  it('should ...', inject([Service969Service], (service: Service969Service) => {
    expect(service).toBeTruthy();
  }));
});
