import { TestBed, inject } from '@angular/core/testing';

import { Service411Service } from './service-411.service';

describe('Service411Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service411Service]
    });
  });

  it('should ...', inject([Service411Service], (service: Service411Service) => {
    expect(service).toBeTruthy();
  }));
});
