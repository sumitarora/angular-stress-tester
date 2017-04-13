import { TestBed, inject } from '@angular/core/testing';

import { Service603Service } from './service-603.service';

describe('Service603Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service603Service]
    });
  });

  it('should ...', inject([Service603Service], (service: Service603Service) => {
    expect(service).toBeTruthy();
  }));
});
