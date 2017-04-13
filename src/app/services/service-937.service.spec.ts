import { TestBed, inject } from '@angular/core/testing';

import { Service937Service } from './service-937.service';

describe('Service937Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service937Service]
    });
  });

  it('should ...', inject([Service937Service], (service: Service937Service) => {
    expect(service).toBeTruthy();
  }));
});
