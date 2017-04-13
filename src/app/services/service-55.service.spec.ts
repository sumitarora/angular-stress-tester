import { TestBed, inject } from '@angular/core/testing';

import { Service55Service } from './service-55.service';

describe('Service55Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service55Service]
    });
  });

  it('should ...', inject([Service55Service], (service: Service55Service) => {
    expect(service).toBeTruthy();
  }));
});
