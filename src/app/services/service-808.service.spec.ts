import { TestBed, inject } from '@angular/core/testing';

import { Service808Service } from './service-808.service';

describe('Service808Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service808Service]
    });
  });

  it('should ...', inject([Service808Service], (service: Service808Service) => {
    expect(service).toBeTruthy();
  }));
});
