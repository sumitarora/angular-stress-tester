import { TestBed, inject } from '@angular/core/testing';

import { Service770Service } from './service-770.service';

describe('Service770Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service770Service]
    });
  });

  it('should ...', inject([Service770Service], (service: Service770Service) => {
    expect(service).toBeTruthy();
  }));
});
