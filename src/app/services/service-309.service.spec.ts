import { TestBed, inject } from '@angular/core/testing';

import { Service309Service } from './service-309.service';

describe('Service309Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service309Service]
    });
  });

  it('should ...', inject([Service309Service], (service: Service309Service) => {
    expect(service).toBeTruthy();
  }));
});
