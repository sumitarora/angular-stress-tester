import { TestBed, inject } from '@angular/core/testing';

import { Service557Service } from './service-557.service';

describe('Service557Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service557Service]
    });
  });

  it('should ...', inject([Service557Service], (service: Service557Service) => {
    expect(service).toBeTruthy();
  }));
});
