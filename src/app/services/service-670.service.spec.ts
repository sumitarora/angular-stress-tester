import { TestBed, inject } from '@angular/core/testing';

import { Service670Service } from './service-670.service';

describe('Service670Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service670Service]
    });
  });

  it('should ...', inject([Service670Service], (service: Service670Service) => {
    expect(service).toBeTruthy();
  }));
});
