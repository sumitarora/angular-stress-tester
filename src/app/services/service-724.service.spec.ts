import { TestBed, inject } from '@angular/core/testing';

import { Service724Service } from './service-724.service';

describe('Service724Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service724Service]
    });
  });

  it('should ...', inject([Service724Service], (service: Service724Service) => {
    expect(service).toBeTruthy();
  }));
});
