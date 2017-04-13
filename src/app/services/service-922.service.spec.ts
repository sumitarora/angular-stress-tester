import { TestBed, inject } from '@angular/core/testing';

import { Service922Service } from './service-922.service';

describe('Service922Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service922Service]
    });
  });

  it('should ...', inject([Service922Service], (service: Service922Service) => {
    expect(service).toBeTruthy();
  }));
});
