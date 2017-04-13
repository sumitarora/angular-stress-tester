import { TestBed, inject } from '@angular/core/testing';

import { Service527Service } from './service-527.service';

describe('Service527Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service527Service]
    });
  });

  it('should ...', inject([Service527Service], (service: Service527Service) => {
    expect(service).toBeTruthy();
  }));
});
