import { TestBed, inject } from '@angular/core/testing';

import { Service544Service } from './service-544.service';

describe('Service544Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service544Service]
    });
  });

  it('should ...', inject([Service544Service], (service: Service544Service) => {
    expect(service).toBeTruthy();
  }));
});
