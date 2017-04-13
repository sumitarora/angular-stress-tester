import { TestBed, inject } from '@angular/core/testing';

import { Service565Service } from './service-565.service';

describe('Service565Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service565Service]
    });
  });

  it('should ...', inject([Service565Service], (service: Service565Service) => {
    expect(service).toBeTruthy();
  }));
});
