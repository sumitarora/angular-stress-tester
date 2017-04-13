import { TestBed, inject } from '@angular/core/testing';

import { Service453Service } from './service-453.service';

describe('Service453Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service453Service]
    });
  });

  it('should ...', inject([Service453Service], (service: Service453Service) => {
    expect(service).toBeTruthy();
  }));
});
