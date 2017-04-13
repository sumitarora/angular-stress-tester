import { TestBed, inject } from '@angular/core/testing';

import { Service814Service } from './service-814.service';

describe('Service814Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service814Service]
    });
  });

  it('should ...', inject([Service814Service], (service: Service814Service) => {
    expect(service).toBeTruthy();
  }));
});
