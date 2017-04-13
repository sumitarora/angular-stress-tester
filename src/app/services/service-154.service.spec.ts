import { TestBed, inject } from '@angular/core/testing';

import { Service154Service } from './service-154.service';

describe('Service154Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service154Service]
    });
  });

  it('should ...', inject([Service154Service], (service: Service154Service) => {
    expect(service).toBeTruthy();
  }));
});
