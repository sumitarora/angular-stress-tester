import { TestBed, inject } from '@angular/core/testing';

import { Service216Service } from './service-216.service';

describe('Service216Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service216Service]
    });
  });

  it('should ...', inject([Service216Service], (service: Service216Service) => {
    expect(service).toBeTruthy();
  }));
});
