import { TestBed, inject } from '@angular/core/testing';

import { Service403Service } from './service-403.service';

describe('Service403Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service403Service]
    });
  });

  it('should ...', inject([Service403Service], (service: Service403Service) => {
    expect(service).toBeTruthy();
  }));
});
