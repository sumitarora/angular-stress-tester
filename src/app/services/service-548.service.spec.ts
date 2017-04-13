import { TestBed, inject } from '@angular/core/testing';

import { Service548Service } from './service-548.service';

describe('Service548Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service548Service]
    });
  });

  it('should ...', inject([Service548Service], (service: Service548Service) => {
    expect(service).toBeTruthy();
  }));
});
