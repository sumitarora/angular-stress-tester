import { TestBed, inject } from '@angular/core/testing';

import { Service368Service } from './service-368.service';

describe('Service368Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service368Service]
    });
  });

  it('should ...', inject([Service368Service], (service: Service368Service) => {
    expect(service).toBeTruthy();
  }));
});
