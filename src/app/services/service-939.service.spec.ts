import { TestBed, inject } from '@angular/core/testing';

import { Service939Service } from './service-939.service';

describe('Service939Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service939Service]
    });
  });

  it('should ...', inject([Service939Service], (service: Service939Service) => {
    expect(service).toBeTruthy();
  }));
});
