import { TestBed, inject } from '@angular/core/testing';

import { Service425Service } from './service-425.service';

describe('Service425Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service425Service]
    });
  });

  it('should ...', inject([Service425Service], (service: Service425Service) => {
    expect(service).toBeTruthy();
  }));
});
