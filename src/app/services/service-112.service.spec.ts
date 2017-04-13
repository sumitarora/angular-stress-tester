import { TestBed, inject } from '@angular/core/testing';

import { Service112Service } from './service-112.service';

describe('Service112Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service112Service]
    });
  });

  it('should ...', inject([Service112Service], (service: Service112Service) => {
    expect(service).toBeTruthy();
  }));
});
