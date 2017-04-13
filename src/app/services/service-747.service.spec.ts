import { TestBed, inject } from '@angular/core/testing';

import { Service747Service } from './service-747.service';

describe('Service747Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service747Service]
    });
  });

  it('should ...', inject([Service747Service], (service: Service747Service) => {
    expect(service).toBeTruthy();
  }));
});
