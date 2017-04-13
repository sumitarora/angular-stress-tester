import { TestBed, inject } from '@angular/core/testing';

import { Service913Service } from './service-913.service';

describe('Service913Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service913Service]
    });
  });

  it('should ...', inject([Service913Service], (service: Service913Service) => {
    expect(service).toBeTruthy();
  }));
});
