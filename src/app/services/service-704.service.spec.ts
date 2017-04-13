import { TestBed, inject } from '@angular/core/testing';

import { Service704Service } from './service-704.service';

describe('Service704Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service704Service]
    });
  });

  it('should ...', inject([Service704Service], (service: Service704Service) => {
    expect(service).toBeTruthy();
  }));
});
