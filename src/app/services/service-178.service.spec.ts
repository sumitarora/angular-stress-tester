import { TestBed, inject } from '@angular/core/testing';

import { Service178Service } from './service-178.service';

describe('Service178Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service178Service]
    });
  });

  it('should ...', inject([Service178Service], (service: Service178Service) => {
    expect(service).toBeTruthy();
  }));
});
