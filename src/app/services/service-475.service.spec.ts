import { TestBed, inject } from '@angular/core/testing';

import { Service475Service } from './service-475.service';

describe('Service475Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service475Service]
    });
  });

  it('should ...', inject([Service475Service], (service: Service475Service) => {
    expect(service).toBeTruthy();
  }));
});
