import { TestBed, inject } from '@angular/core/testing';

import { Service888Service } from './service-888.service';

describe('Service888Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service888Service]
    });
  });

  it('should ...', inject([Service888Service], (service: Service888Service) => {
    expect(service).toBeTruthy();
  }));
});
