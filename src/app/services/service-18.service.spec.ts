import { TestBed, inject } from '@angular/core/testing';

import { Service18Service } from './service-18.service';

describe('Service18Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service18Service]
    });
  });

  it('should ...', inject([Service18Service], (service: Service18Service) => {
    expect(service).toBeTruthy();
  }));
});
