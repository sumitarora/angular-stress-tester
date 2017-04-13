import { TestBed, inject } from '@angular/core/testing';

import { Service488Service } from './service-488.service';

describe('Service488Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service488Service]
    });
  });

  it('should ...', inject([Service488Service], (service: Service488Service) => {
    expect(service).toBeTruthy();
  }));
});
