import { TestBed, inject } from '@angular/core/testing';

import { Service852Service } from './service-852.service';

describe('Service852Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service852Service]
    });
  });

  it('should ...', inject([Service852Service], (service: Service852Service) => {
    expect(service).toBeTruthy();
  }));
});
