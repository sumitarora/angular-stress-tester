import { TestBed, inject } from '@angular/core/testing';

import { Service716Service } from './service-716.service';

describe('Service716Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service716Service]
    });
  });

  it('should ...', inject([Service716Service], (service: Service716Service) => {
    expect(service).toBeTruthy();
  }));
});
