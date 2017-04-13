import { TestBed, inject } from '@angular/core/testing';

import { Service85Service } from './service-85.service';

describe('Service85Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service85Service]
    });
  });

  it('should ...', inject([Service85Service], (service: Service85Service) => {
    expect(service).toBeTruthy();
  }));
});
