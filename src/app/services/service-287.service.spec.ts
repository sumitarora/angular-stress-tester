import { TestBed, inject } from '@angular/core/testing';

import { Service287Service } from './service-287.service';

describe('Service287Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service287Service]
    });
  });

  it('should ...', inject([Service287Service], (service: Service287Service) => {
    expect(service).toBeTruthy();
  }));
});
