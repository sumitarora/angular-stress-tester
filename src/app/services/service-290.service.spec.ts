import { TestBed, inject } from '@angular/core/testing';

import { Service290Service } from './service-290.service';

describe('Service290Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service290Service]
    });
  });

  it('should ...', inject([Service290Service], (service: Service290Service) => {
    expect(service).toBeTruthy();
  }));
});
