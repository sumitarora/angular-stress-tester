import { TestBed, inject } from '@angular/core/testing';

import { Service240Service } from './service-240.service';

describe('Service240Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service240Service]
    });
  });

  it('should ...', inject([Service240Service], (service: Service240Service) => {
    expect(service).toBeTruthy();
  }));
});
