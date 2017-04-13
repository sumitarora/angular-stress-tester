import { TestBed, inject } from '@angular/core/testing';

import { Service991Service } from './service-991.service';

describe('Service991Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service991Service]
    });
  });

  it('should ...', inject([Service991Service], (service: Service991Service) => {
    expect(service).toBeTruthy();
  }));
});
