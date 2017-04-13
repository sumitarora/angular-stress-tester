import { TestBed, inject } from '@angular/core/testing';

import { Service963Service } from './service-963.service';

describe('Service963Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service963Service]
    });
  });

  it('should ...', inject([Service963Service], (service: Service963Service) => {
    expect(service).toBeTruthy();
  }));
});
