import { TestBed, inject } from '@angular/core/testing';

import { Service698Service } from './service-698.service';

describe('Service698Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service698Service]
    });
  });

  it('should ...', inject([Service698Service], (service: Service698Service) => {
    expect(service).toBeTruthy();
  }));
});
