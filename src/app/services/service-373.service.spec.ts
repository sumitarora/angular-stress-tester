import { TestBed, inject } from '@angular/core/testing';

import { Service373Service } from './service-373.service';

describe('Service373Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service373Service]
    });
  });

  it('should ...', inject([Service373Service], (service: Service373Service) => {
    expect(service).toBeTruthy();
  }));
});
