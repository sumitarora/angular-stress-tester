import { TestBed, inject } from '@angular/core/testing';

import { Service490Service } from './service-490.service';

describe('Service490Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service490Service]
    });
  });

  it('should ...', inject([Service490Service], (service: Service490Service) => {
    expect(service).toBeTruthy();
  }));
});
