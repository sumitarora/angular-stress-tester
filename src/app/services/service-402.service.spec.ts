import { TestBed, inject } from '@angular/core/testing';

import { Service402Service } from './service-402.service';

describe('Service402Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service402Service]
    });
  });

  it('should ...', inject([Service402Service], (service: Service402Service) => {
    expect(service).toBeTruthy();
  }));
});
