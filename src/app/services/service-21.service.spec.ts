import { TestBed, inject } from '@angular/core/testing';

import { Service21Service } from './service-21.service';

describe('Service21Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service21Service]
    });
  });

  it('should ...', inject([Service21Service], (service: Service21Service) => {
    expect(service).toBeTruthy();
  }));
});
