import { TestBed, inject } from '@angular/core/testing';

import { Service822Service } from './service-822.service';

describe('Service822Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service822Service]
    });
  });

  it('should ...', inject([Service822Service], (service: Service822Service) => {
    expect(service).toBeTruthy();
  }));
});
