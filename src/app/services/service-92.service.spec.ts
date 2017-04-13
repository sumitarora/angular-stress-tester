import { TestBed, inject } from '@angular/core/testing';

import { Service92Service } from './service-92.service';

describe('Service92Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service92Service]
    });
  });

  it('should ...', inject([Service92Service], (service: Service92Service) => {
    expect(service).toBeTruthy();
  }));
});
