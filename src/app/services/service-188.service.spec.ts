import { TestBed, inject } from '@angular/core/testing';

import { Service188Service } from './service-188.service';

describe('Service188Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service188Service]
    });
  });

  it('should ...', inject([Service188Service], (service: Service188Service) => {
    expect(service).toBeTruthy();
  }));
});
