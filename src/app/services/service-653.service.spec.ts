import { TestBed, inject } from '@angular/core/testing';

import { Service653Service } from './service-653.service';

describe('Service653Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service653Service]
    });
  });

  it('should ...', inject([Service653Service], (service: Service653Service) => {
    expect(service).toBeTruthy();
  }));
});
