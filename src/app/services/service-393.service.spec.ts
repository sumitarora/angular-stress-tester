import { TestBed, inject } from '@angular/core/testing';

import { Service393Service } from './service-393.service';

describe('Service393Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service393Service]
    });
  });

  it('should ...', inject([Service393Service], (service: Service393Service) => {
    expect(service).toBeTruthy();
  }));
});
