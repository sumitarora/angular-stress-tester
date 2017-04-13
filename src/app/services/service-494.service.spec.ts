import { TestBed, inject } from '@angular/core/testing';

import { Service494Service } from './service-494.service';

describe('Service494Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service494Service]
    });
  });

  it('should ...', inject([Service494Service], (service: Service494Service) => {
    expect(service).toBeTruthy();
  }));
});
