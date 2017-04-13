import { TestBed, inject } from '@angular/core/testing';

import { Service11Service } from './service-11.service';

describe('Service11Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service11Service]
    });
  });

  it('should ...', inject([Service11Service], (service: Service11Service) => {
    expect(service).toBeTruthy();
  }));
});
