import { TestBed, inject } from '@angular/core/testing';

import { Service50Service } from './service-50.service';

describe('Service50Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service50Service]
    });
  });

  it('should ...', inject([Service50Service], (service: Service50Service) => {
    expect(service).toBeTruthy();
  }));
});
