import { TestBed, inject } from '@angular/core/testing';

import { Service206Service } from './service-206.service';

describe('Service206Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service206Service]
    });
  });

  it('should ...', inject([Service206Service], (service: Service206Service) => {
    expect(service).toBeTruthy();
  }));
});
