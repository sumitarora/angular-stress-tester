import { TestBed, inject } from '@angular/core/testing';

import { Service329Service } from './service-329.service';

describe('Service329Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service329Service]
    });
  });

  it('should ...', inject([Service329Service], (service: Service329Service) => {
    expect(service).toBeTruthy();
  }));
});
