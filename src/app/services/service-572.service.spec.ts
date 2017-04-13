import { TestBed, inject } from '@angular/core/testing';

import { Service572Service } from './service-572.service';

describe('Service572Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service572Service]
    });
  });

  it('should ...', inject([Service572Service], (service: Service572Service) => {
    expect(service).toBeTruthy();
  }));
});
