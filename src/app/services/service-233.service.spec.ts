import { TestBed, inject } from '@angular/core/testing';

import { Service233Service } from './service-233.service';

describe('Service233Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service233Service]
    });
  });

  it('should ...', inject([Service233Service], (service: Service233Service) => {
    expect(service).toBeTruthy();
  }));
});
