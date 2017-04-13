import { TestBed, inject } from '@angular/core/testing';

import { Service432Service } from './service-432.service';

describe('Service432Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service432Service]
    });
  });

  it('should ...', inject([Service432Service], (service: Service432Service) => {
    expect(service).toBeTruthy();
  }));
});
