import { TestBed, inject } from '@angular/core/testing';

import { Service714Service } from './service-714.service';

describe('Service714Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service714Service]
    });
  });

  it('should ...', inject([Service714Service], (service: Service714Service) => {
    expect(service).toBeTruthy();
  }));
});
