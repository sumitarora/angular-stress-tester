import { TestBed, inject } from '@angular/core/testing';

import { Service489Service } from './service-489.service';

describe('Service489Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service489Service]
    });
  });

  it('should ...', inject([Service489Service], (service: Service489Service) => {
    expect(service).toBeTruthy();
  }));
});
