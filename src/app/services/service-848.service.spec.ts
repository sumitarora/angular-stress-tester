import { TestBed, inject } from '@angular/core/testing';

import { Service848Service } from './service-848.service';

describe('Service848Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service848Service]
    });
  });

  it('should ...', inject([Service848Service], (service: Service848Service) => {
    expect(service).toBeTruthy();
  }));
});
