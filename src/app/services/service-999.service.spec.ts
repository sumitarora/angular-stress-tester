import { TestBed, inject } from '@angular/core/testing';

import { Service999Service } from './service-999.service';

describe('Service999Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service999Service]
    });
  });

  it('should ...', inject([Service999Service], (service: Service999Service) => {
    expect(service).toBeTruthy();
  }));
});
