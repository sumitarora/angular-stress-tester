import { TestBed, inject } from '@angular/core/testing';

import { Service585Service } from './service-585.service';

describe('Service585Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service585Service]
    });
  });

  it('should ...', inject([Service585Service], (service: Service585Service) => {
    expect(service).toBeTruthy();
  }));
});
