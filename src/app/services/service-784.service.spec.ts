import { TestBed, inject } from '@angular/core/testing';

import { Service784Service } from './service-784.service';

describe('Service784Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service784Service]
    });
  });

  it('should ...', inject([Service784Service], (service: Service784Service) => {
    expect(service).toBeTruthy();
  }));
});
