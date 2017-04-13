import { TestBed, inject } from '@angular/core/testing';

import { Service485Service } from './service-485.service';

describe('Service485Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service485Service]
    });
  });

  it('should ...', inject([Service485Service], (service: Service485Service) => {
    expect(service).toBeTruthy();
  }));
});
