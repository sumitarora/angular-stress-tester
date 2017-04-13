import { TestBed, inject } from '@angular/core/testing';

import { Service388Service } from './service-388.service';

describe('Service388Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service388Service]
    });
  });

  it('should ...', inject([Service388Service], (service: Service388Service) => {
    expect(service).toBeTruthy();
  }));
});
