import { TestBed, inject } from '@angular/core/testing';

import { Service339Service } from './service-339.service';

describe('Service339Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service339Service]
    });
  });

  it('should ...', inject([Service339Service], (service: Service339Service) => {
    expect(service).toBeTruthy();
  }));
});
