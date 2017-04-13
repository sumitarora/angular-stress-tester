import { TestBed, inject } from '@angular/core/testing';

import { Service101Service } from './service-101.service';

describe('Service101Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service101Service]
    });
  });

  it('should ...', inject([Service101Service], (service: Service101Service) => {
    expect(service).toBeTruthy();
  }));
});
