import { TestBed, inject } from '@angular/core/testing';

import { Service400Service } from './service-400.service';

describe('Service400Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service400Service]
    });
  });

  it('should ...', inject([Service400Service], (service: Service400Service) => {
    expect(service).toBeTruthy();
  }));
});
