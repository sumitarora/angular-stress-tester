import { TestBed, inject } from '@angular/core/testing';

import { Service508Service } from './service-508.service';

describe('Service508Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service508Service]
    });
  });

  it('should ...', inject([Service508Service], (service: Service508Service) => {
    expect(service).toBeTruthy();
  }));
});
