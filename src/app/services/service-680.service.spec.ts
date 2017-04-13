import { TestBed, inject } from '@angular/core/testing';

import { Service680Service } from './service-680.service';

describe('Service680Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service680Service]
    });
  });

  it('should ...', inject([Service680Service], (service: Service680Service) => {
    expect(service).toBeTruthy();
  }));
});
