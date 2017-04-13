import { TestBed, inject } from '@angular/core/testing';

import { Service6Service } from './service-6.service';

describe('Service6Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service6Service]
    });
  });

  it('should ...', inject([Service6Service], (service: Service6Service) => {
    expect(service).toBeTruthy();
  }));
});
