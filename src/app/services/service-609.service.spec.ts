import { TestBed, inject } from '@angular/core/testing';

import { Service609Service } from './service-609.service';

describe('Service609Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service609Service]
    });
  });

  it('should ...', inject([Service609Service], (service: Service609Service) => {
    expect(service).toBeTruthy();
  }));
});
