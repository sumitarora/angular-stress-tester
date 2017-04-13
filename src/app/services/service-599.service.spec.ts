import { TestBed, inject } from '@angular/core/testing';

import { Service599Service } from './service-599.service';

describe('Service599Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service599Service]
    });
  });

  it('should ...', inject([Service599Service], (service: Service599Service) => {
    expect(service).toBeTruthy();
  }));
});
