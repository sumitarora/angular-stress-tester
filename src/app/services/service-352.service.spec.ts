import { TestBed, inject } from '@angular/core/testing';

import { Service352Service } from './service-352.service';

describe('Service352Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service352Service]
    });
  });

  it('should ...', inject([Service352Service], (service: Service352Service) => {
    expect(service).toBeTruthy();
  }));
});
