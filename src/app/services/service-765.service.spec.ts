import { TestBed, inject } from '@angular/core/testing';

import { Service765Service } from './service-765.service';

describe('Service765Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service765Service]
    });
  });

  it('should ...', inject([Service765Service], (service: Service765Service) => {
    expect(service).toBeTruthy();
  }));
});
