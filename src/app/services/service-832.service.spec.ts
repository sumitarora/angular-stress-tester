import { TestBed, inject } from '@angular/core/testing';

import { Service832Service } from './service-832.service';

describe('Service832Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service832Service]
    });
  });

  it('should ...', inject([Service832Service], (service: Service832Service) => {
    expect(service).toBeTruthy();
  }));
});
