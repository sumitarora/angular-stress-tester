import { TestBed, inject } from '@angular/core/testing';

import { Service189Service } from './service-189.service';

describe('Service189Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service189Service]
    });
  });

  it('should ...', inject([Service189Service], (service: Service189Service) => {
    expect(service).toBeTruthy();
  }));
});
