import { TestBed, inject } from '@angular/core/testing';

import { Service484Service } from './service-484.service';

describe('Service484Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service484Service]
    });
  });

  it('should ...', inject([Service484Service], (service: Service484Service) => {
    expect(service).toBeTruthy();
  }));
});
