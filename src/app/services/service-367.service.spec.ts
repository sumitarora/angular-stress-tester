import { TestBed, inject } from '@angular/core/testing';

import { Service367Service } from './service-367.service';

describe('Service367Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service367Service]
    });
  });

  it('should ...', inject([Service367Service], (service: Service367Service) => {
    expect(service).toBeTruthy();
  }));
});
