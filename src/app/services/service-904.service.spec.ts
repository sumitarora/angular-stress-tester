import { TestBed, inject } from '@angular/core/testing';

import { Service904Service } from './service-904.service';

describe('Service904Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service904Service]
    });
  });

  it('should ...', inject([Service904Service], (service: Service904Service) => {
    expect(service).toBeTruthy();
  }));
});
