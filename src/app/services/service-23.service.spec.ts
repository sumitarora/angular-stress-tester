import { TestBed, inject } from '@angular/core/testing';

import { Service23Service } from './service-23.service';

describe('Service23Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service23Service]
    });
  });

  it('should ...', inject([Service23Service], (service: Service23Service) => {
    expect(service).toBeTruthy();
  }));
});
