import { TestBed, inject } from '@angular/core/testing';

import { Service371Service } from './service-371.service';

describe('Service371Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service371Service]
    });
  });

  it('should ...', inject([Service371Service], (service: Service371Service) => {
    expect(service).toBeTruthy();
  }));
});
