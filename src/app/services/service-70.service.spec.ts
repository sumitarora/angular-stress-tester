import { TestBed, inject } from '@angular/core/testing';

import { Service70Service } from './service-70.service';

describe('Service70Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service70Service]
    });
  });

  it('should ...', inject([Service70Service], (service: Service70Service) => {
    expect(service).toBeTruthy();
  }));
});
