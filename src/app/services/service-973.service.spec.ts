import { TestBed, inject } from '@angular/core/testing';

import { Service973Service } from './service-973.service';

describe('Service973Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service973Service]
    });
  });

  it('should ...', inject([Service973Service], (service: Service973Service) => {
    expect(service).toBeTruthy();
  }));
});
