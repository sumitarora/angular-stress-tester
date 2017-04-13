import { TestBed, inject } from '@angular/core/testing';

import { Service334Service } from './service-334.service';

describe('Service334Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service334Service]
    });
  });

  it('should ...', inject([Service334Service], (service: Service334Service) => {
    expect(service).toBeTruthy();
  }));
});
