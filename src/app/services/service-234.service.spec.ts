import { TestBed, inject } from '@angular/core/testing';

import { Service234Service } from './service-234.service';

describe('Service234Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service234Service]
    });
  });

  it('should ...', inject([Service234Service], (service: Service234Service) => {
    expect(service).toBeTruthy();
  }));
});
