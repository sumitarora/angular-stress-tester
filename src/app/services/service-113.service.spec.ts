import { TestBed, inject } from '@angular/core/testing';

import { Service113Service } from './service-113.service';

describe('Service113Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service113Service]
    });
  });

  it('should ...', inject([Service113Service], (service: Service113Service) => {
    expect(service).toBeTruthy();
  }));
});
