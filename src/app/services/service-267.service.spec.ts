import { TestBed, inject } from '@angular/core/testing';

import { Service267Service } from './service-267.service';

describe('Service267Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service267Service]
    });
  });

  it('should ...', inject([Service267Service], (service: Service267Service) => {
    expect(service).toBeTruthy();
  }));
});
