import { TestBed, inject } from '@angular/core/testing';

import { Service399Service } from './service-399.service';

describe('Service399Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service399Service]
    });
  });

  it('should ...', inject([Service399Service], (service: Service399Service) => {
    expect(service).toBeTruthy();
  }));
});
